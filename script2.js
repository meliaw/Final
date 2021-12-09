$(document).ready(function(){
setTimeout(function(){
   $(".popUpContainer").show();
 }, 5000);
});


(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem5 = document.querySelector(".overlay");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;


        let _depth10 = `${50 - (_mouseX + _w) * 0.02}% ${50 + (_mouseY - _h) * 0.02}%`;
        let _depth11 = `${50 - (_mouseX + _w) * 0.06}% ${50 + (_mouseY - _h) * 0.06}%`;
        let _depth12 = `${50 - (_mouseX + _w) * 0.010}% ${50 + (_mouseY - _h) * 0.5}%`;



        let x4 = `${_depth10}, ${_depth11}, ${_depth12}`;


        console.log(x4);
        elem5.style.backgroundPosition = x4;
    }

})();
