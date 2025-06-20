{/* <link rel="stylesheet" href="main.css"></link> */}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function newp(){
    window.open("https://github.com/yorugaakkeru/legendary-chainsaw");
}
function popup1(){
    
}
async function kal(){
    for (let i = 0; i <= 400; i+=10){
        document.getElementById("childCircle1").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle2").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle3").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle4").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle5").style.cssText = `height:${i}px;width:${i}px;`;
        await delay(80);
    }
    for (let i = 410; i>0; i-=10){
        document.getElementById("childCircle1").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle2").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle3").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle4").style.cssText = `height:${i}px;width:${i}px;`;
        document.getElementById("childCircle5").style.cssText = `height:${i}px;width:${i}px;`;
        await delay(80);
    }
}