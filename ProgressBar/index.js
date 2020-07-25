var progressFlag=false;
function move() {
  if (!progressFlag) {
    progressFlag=true;
    const el = document.getElementById("myBar");
    var width = 10;
    var timerId = setInterval(progress, 1000);
    function progress() {
      if (width >= 100) {
        clearInterval(timerId);
        progressFlag=false;
      } else {
        width++;
        el.style.width = width + "%";
        el.innerHTML=width+'%';
      }
    }
  }
}
