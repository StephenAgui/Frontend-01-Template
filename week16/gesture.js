let element = document.body;
let contexts = Object.create(null);
let MOUSE_SYBOL = Symbol("mouse");



 function enableGesture(element){


    //解决两次tap的问题，有触摸屏取消鼠标
    if(document.ontouchstart !== null){
        element.addEventListener("mousedown",(event)=>{
            contexts[MOUSE_SYBOL] = Object.create(null);
            start(event,contexts[MOUSE_SYBOL]);
            let mousemove = event=>{
                move(event,contexts[MOUSE_SYBOL]);
            }
            let mouseend = event => {
                end(event,contexts[MOUSE_SYBOL]);
                document.removeEventListener("mousemove",mousemove);
                document.removeEventListener("mouseup",mouseend);
            }
            document.addEventListener("mousemove",mousemove);
            document.addEventListener("mouseup",mouseend);
        });
    }



    element.addEventListener("touchstart",(event)=>{
    
        for(let touch of event.changedTouches){
            contexts[touch.identifier] = Object.create(null);
            start(touch,contexts[touch.identifier]);
        }
    });

    element.addEventListener("touchmove",event=>{
        for(let touch of event.changedTouches){
            move(touch,contexts[touch.identifier]);
        }
    })

    element.addEventListener("touchend",event=>{
        for(let touch of event.changedTouches){
            end(touch,contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    });


    element.addEventListener("touchcancel",event=>{
        for(let touch of event.changedTouches){
            cancel(touch,contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    });


    //tap
    //pan   pan start pan end           拖动
    //flick
    //press  press start press end

    let start = (point,context)=>{
        context.startX = point.clientX;
        context.startY = point.clientY;
        console.log("start",point.clientX,point.clientY);
        
        element.dispatchEvent(new CustomEvent("start",{
            startX:point.clientX,
            startY:point.clientY,
            clientX:point.clientX,
            clientY:point.clientY
        }))

        context.moves = [];
        context.isTap = true;
        context.isPan = false;
        context.isPress = false;
        context.timeoutHandle = setTimeout(() => {
            if(context.isPan) 
                return;             //如果是pan，则不会触发press,pan的优先级更高
            context.isTap = false;
            context.isPan = false;
            context.isPress = true;
            console.log("press start")
        }, 500);
    }

    let move = (point,context)=>{
        let dx = point.clientX - context.startX, dy = point.clientY - context.startY; 
        if(dx ** 2 + dy ** 2 > 100 && !context.isPan){
            //大于10个像素，则是pan
            context.isTap = false;
            context.isPan = true;
            context.isPress = false;
            console.log("pan start")
            let e = new CustomEvent("panstart");
            Object.assign(e,{
                startX:context.startX,
                startY:context.startY,
                clientX:point.clientX,
                clientY:point.clientY
            });
            element.dispatchEvent(e);
        }
        context.moves.push({
            dx,dy,
            t:Date.now()
        })
        context.moves = context.moves.filter(record =>{
            return Date.now() - record.t < 300
        })
        

        //如果挪回去是无效的
        if(context.isPan){
            let dx = 
            // console.log(context.moves);
            console.log("pan")
            let e = new CustomEvent("panmove")
            Object.assign(e,{
                startX:context.startX,
                startY:context.startY,
                clientX:point.clientX,
                clientY:point.clientY,
               
            });
            element.dispatchEvent(e)
        }
        // console.log("move",dx,dy);
    }

    let end = (point,context)=>{
        if(context.isPan){
            console.log("pan end");
            let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
            let record = context.moves[0];
            let speed = Math.sqrt((record.dx - dx) ** 2 + (record.dy - dy) ** 2) / (Date.now() - record.t);
            console.log(speed);
            let isFilck = speed > 2.5;
            if(isFilck){
                console.log("flick");
                const event = new CustomEvent("flick",{});
                element.dispatchEvent(event);
                return;
            }
            let e = new CustomEvent("panend")
            Object.assign(e,{
                startX:context.startX,
                startY:context.startY,
                clientX:point.clientX,
                clientY:point.clientY,
                speed:speed,
                isFilck:isFilck
            });
            element.dispatchEvent(e)
        } 
        if(context.isTap) {
            console.log("tap end");
            const event = new CustomEvent("tap",{});
            element.dispatchEvent(event);
        }
        if(context.isPress) {
            console.log("press end");
            const event = new CustomEvent("press",{});
            element.dispatchEvent(event);
        }
        clearTimeout(context.timeoutHandle);
    }

    let cancel = (point,context)=>{
        console.log("cancel",point.clientX,point.clientY);
        clearTimeout(context.timeoutHandle);
    }
}
