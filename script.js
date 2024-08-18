
         
    setTimeout(()=>{
        const popup = document.querySelector(".pop-up")
           popup.classList.add("show");
    },3000)
   
    document.querySelector('.close-btn').addEventListener('click',()=>{
        document.querySelector(".pop-up").style.display = "none";
        popup.classList.remove("show")
    })








   