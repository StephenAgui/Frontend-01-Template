const net = require("net");

class Request {
    constructor(options){
        this.methond = options.methond || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.body = options.body || {};
        this.path = options.path || "/";
        this.headers = options.headers || {};
        if(!this.headers["Content-Type"]){
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if(this.headers["Content-Type"] === "application/json"){
            this.bodyText = JSON.stringify(this.body);
        }else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded"){
            this.bodyText = Object.keys(this.body).map(key=>`${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }
        this.headers["Content-Length"] = this.bodyText.length;
    }

    toString(){
        return `${this.methond} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key=>`${key}: ${this.headers[key]}`).join('\r\n')}
\r
${this.bodyText}`;
        
    }

    send(connection){
        return new Promise((resolve,reject)=>{
            const parser = new ResponseParser();
            
            if(connection){
                connection.write(this.toString());
            }else{
                connection = net.createConnection({
                    host:this.host,
                    port:this.port
                },()=>{
                    console.log(this.toString());
                    console.log("\r\n ###connect to server");
                    connection.write(this.toString());
                });
            }
            connection.on("data",data=>{
                console.log('received from serve:');
                // resolve(data.toString());
                parser.receive(data.toString())
          console.log(parser.response,parser.isFinished, 'headers')
                connection.end();
            });
            connection.on("error",error=>{
                console.log(error);
                reject(error);
                connection.end();
            });
        });
        
    }
}


class Response {

}

class ResponseParser{
    constructor() {
        this.WAITING_STATUS_LINE = 0
        this.WAITING_STATUS_LINE_END = 1
        this.WAITING_HEADER_NAME = 2
        this.WAITING_HEADER_SPACE = 3
        this.WAITING_HEADER_VALUE = 4
        this.WAITING_HEADER_LINE_END = 5
        this.WAITING_HEADER_BLOCK_END = 6
        this.WAITING_BODY = 7
        this.current = this.WAITING_STATUS_LINE
        this.headers = {}
        this.headerName = ''
        this.headerValue = ''
        this.statusLine = ''
        this.bodyParser = null
      }
    
      get isFinished() {
        return this.bodyParser && this.bodyParser.isFinished
      }
    
      get response() {
        this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/)
        return {
          statusCode: RegExp.$1,
          statusText: RegExp.$2,
          headers: this.headers,
          body: this.bodyParser.content.join('')
        }
      }
    
      receive(string) {
        for (let i = 0; i < string.length; i++) {
          this.receiveChar(string.charAt(i))
        }
      }
    
      receiveChar(char) {
        if (this.current === this.WAITING_STATUS_LINE) {
          if (char === '\r') {
            this.current = this.WAITING_STATUS_LINE_END
          } else if (char === '\n') {
            this.current = this.WAITING_HEADER_NAME
          } else {
            this.statusLine += char
          }
        } else if (this.current === this.WAITING_STATUS_LINE_END) {
          if (char === '\n') {
            this.current = this.WAITING_HEADER_NAME
          }
        } else if (this.current === this.WAITING_HEADER_NAME) {
          if (char === ':') {
            this.current = this.WAITING_HEADER_SPACE
          } else if (char === '\r') {
            this.current = this.WAITING_HEADER_BLOCK_END
            if (this.headers['Transfer-Encoding'] === 'chunked') {
              this.bodyParser = new TrunkedBodyParser()
            }
          } else {
            this.headerName += char
          }
        } 
        else if (this.current === this.WAITING_HEADER_BLOCK_END) {
          if (char === '\n') {
            this.current = this.WAITING_BODY
          }
        }else if (this.current === this.WAITING_HEADER_SPACE) {
          if (char === ' ') {
            this.current = this.WAITING_HEADER_VALUE
          }
        } else if (this.current === this.WAITING_HEADER_VALUE) {
          if (char === '\r') {
            this.current = this.WAITING_HEADER_LINE_END
            this.headers[this.headerName] = this.headerValue
            this.headerName = this.headerValue = ''
          } else {
            this.headerValue += char
          }
        } else if (this.current === this.WAITING_HEADER_LINE_END) {
          if (char === '\n') {
            this.current = this.WAITING_HEADER_NAME
          }
        } else if (this.current === this.WAITING_BODY) {
          this.bodyParser.receiveChar(char)
        }
      }
}


class TrunkedBodyParser {
    constructor() {
      this.WAITING_LENGTH = 0
      this.WAITING_LENGTH_LINE_END = 1
      this.READING_TRUNK = 2
      this.WAITING_NEW_LINE = 3
      this.WAITING_NEW_LINE_END = 4
      this.length = 0
      this.content = []
      this.isFinished = false
      this.current = this.WAITING_LENGTH
    }
    receiveChar(char) {
      if (this.current === this.WAITING_LENGTH) {
        if (char === '\r') {
          if (this.length === 0) {
            this.isFinished = true
          }
          this.current = this.WAITING_LENGTH_LINE_END
        } else {
          this.length *= 10
          this.length += char.charCodeAt(0) - '0'.charCodeAt(0)
        }
      } else if (this.current === this.WAITING_LENGTH_LINE_END) {
        if (char === '\n') {
          this.current = this.READING_TRUNK
        }
      } else if (this.current === this.READING_TRUNK) {
        if(/[^\r\n]/.test(char)){
          this.content.push(char)
        }
        this.length --
        if (this.length === 0) {
          this.current = this.WAITING_NEW_LINE
        }
      } else if (this.current === this.WAITING_NEW_LINE) {
        if (char === '\r') {
          this.current = this.WAITING_NEW_LINE_END
        }
      } else if (this.current === this.WAITING_NEW_LINE_END) {
        if (char === '\n') {
          this.current = this.WAITING_LENGTH
        }
      }
    }
  }

void async function(){
    let request = new Request({
        methond:"POST",
        port:"8088",
        host:"192.168.31.144",
        // host:"127.0.0.1",
        path:"/",
        body:{
            name:"winter"
        },
        headers:{
            ["X-Foo2"]:"customed"
        }
    });
    let Response = await request.send();
    console.log(Response);
    
}();



/*

const client = net.createConnection({
    host:"127.0.0.1",
    // host:"www.baidu.com",
    port:8088},()=>{
        console.log('connect to server !');

        let request = new Request({
            methond:"POST",
            port:"8088",
            host:"127.0.0.1",
            path:"/",
            body:{
                name:"winter"
            },
            headers:{
                ["X-Foo2"]:"customed"
            }
        });
        
        console.log(request.toString());
        client.write(request.toString());
        // client.write('POST / HTTP/1.1\r\n');
        // client.write('Host: 127.0.0.1\r\n');
        
        // client.write('Content-Type: application/x-www-form-urlencoded\r\n');
        // client.write('Content-Length: 11');
        // client.write('\r\n\r\n');
        // client.write('name=winter');
    }
);

client.on('data',data=>{
    console.log('received from serve:');
    console.log(data.toString());
    client.end();
});

client.on('end',()=>{
    console.log('disconnect');
});


client.on('error',err=>{
    console.log(err);

});
// net.connect({
//     port:8088,
//     host:"127.0.0.1",
//     onread:{
//         buffer:Buffer.alloc(4*1024),
//         callback:function (nread,buf){
//             console.log(buf.toString('utf8',0,nread));
//         }
//     }
// })

*/

