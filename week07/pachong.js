let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);


function happen(element,event){
    return new Promise(function(resove){
        let handler = ()=>{
            resove();
            element.removeEventListener(event,handler);
        }
        element.addEventListener(event,resolve);
    });
}


void async function () { 
    for (let standard of standard.usl){
        iframe.src = standard.src;
        console.log(standard.name);
        await happen(iframe,"load");
    }
 }();