const modal = document.getElementById("myModal");
const modalClose = document.getElementsByClassName("close")[0];
const showModalBtn = document.getElementById("btn-modal");

//show modal on button click
showModalBtn.addEventListener("click",function(){
    modal.style.display="block";
})


//close modal on span close
modalClose.addEventListener("click",function(){
    modal.style.display="none";
})


//click outside the modal anywhere to close it

window.addEventListener("click",function(e){
    if(e.target == modal){
        modal.style.display="none";
    }
})