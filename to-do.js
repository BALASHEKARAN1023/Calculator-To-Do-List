alert("Click on the 'add' button to add work")
alert("Double click the inserted value to remove the work")
let addbtn=document.getElementById("add");
let todocontainer=document.getElementById("todoconatiner");
let work = document.getElementById("work")

    addbtn.addEventListener('click',function()
    {
        var para= document.createElement("p");
        para.innerText=work.value;
        if(work.value ==""|| work.value ==" "){
            alert("enter a work to do");
        
        }
        else{

            todocontainer.appendChild(para)
            work.value=""
            
            para.addEventListener('click',function(){
                para.style.textDecoration="line-through";
                para.style.backdropFilter="brightness(60%)"
            })
            para.addEventListener('dblclick',function(){
                todocontainer.removeChild(para);
            })
        }
        
    })