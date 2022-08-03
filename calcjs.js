//selector
const output=document.querySelector(".output");
const result=document.querySelector(".result");
const keys=document.querySelectorAll("button")


//event listner

keys.forEach(key=>{
    key.addEventListener("click",calculate);
});


function calculate(){
    let buttonText=this.innerText;
    if(buttonText==="AC"){
        output.innerText="";
        result.innerText="";
        result.style.animationFillMode="forwards";
        output.style.animationFillMode="forwards";
        return;
    }
    if(buttonText==="DEL"){
        var n=output.textContent.length;
        output.textContent = output.textContent.substring(0,n-1);
        return;
    }
    if(buttonText === "="){
        result.innerText=eval(output.innerText);
        result.style.animation="big 0.2s ease-in-out";
        output.style.animation="small 0.2s ease-in-out";
        result.style.animationFillMode="forwards";
        output.style.animationFillMode="forwards";


    }
    
    else{
        output.textContent += buttonText;
    }

}