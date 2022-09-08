const output=document.querySelector(".output");
const button=document.querySelectorAll("span");

button.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        if(ele.innerHTML=="="){
            try{
                output.innerHTML=eval(output.innerHTML);
            }
            catch{
                output.innerHTML="error"
            }
        }
        else if(ele.innerHTML=="clear"){
            output.innerHTML="";
        }
        else{
            output.innerHTML+=ele.innerHTML;
        }
    })
})