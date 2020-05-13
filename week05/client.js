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
                resolve(data.toString());
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
            prot:"8088",
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

