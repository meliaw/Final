
$(document).ready(function(){
setTimeout(function(){
   $(".popUpContainer").show();
 }, 5000);
});



(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    const elem2 = document.querySelector("#parallax2");
    const elem3 = document.querySelector("#parallax3");
    const elem4 = document.querySelector(".esteemContainer")
    const elem5 = document.querySelector(".anxietyContainer")
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.10}%`;

        let _depth4 = `${100 - (_mouseX - _w) * 0.01}% ${50 + (_mouseY - _h) * 0.01}%`;
        let _depth5 = `${50 - (_mouseX - _w) * 0.02}% ${50 + (_mouseY - _h) * 0.02}%`;
        let _depth6 = `${50 - (_mouseX - _w) * 0.06}% ${50 + (_mouseY - _h) * 0.06}%`;

        let _depth7 = `${50 - (_mouseX + _w) * 0.02}% ${50 - (_mouseY + _h) * 0.02}%`;
        let _depth8 = `${50 - (_mouseX + _w) * 0.06}% ${50 - (_mouseY + _h) * 0.06}%`;
        let _depth9 = `${50 - (_mouseX + _w) * 0.010}% ${50 - (_mouseY + _h) * 0.5}%`;

        let _depth10 = `${50 - (_mouseX + _w) * 0.02}% ${50 + (_mouseY + _h) * 0.02}%`;
        let _depth11 = `${50 - (_mouseX + _w) * 0.06}% ${50 + (_mouseY + _h) * 0.06}%`;
        let _depth12 = `${50 - (_mouseX + _w) * 0.010}% ${50 + (_mouseY + _h) * 0.5}%`;


        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        let x2 = `${_depth4}, ${_depth5}, ${_depth6}`;
        let x3 = `${_depth7}, ${_depth8}, ${_depth9}`;
        let x4 = `${_depth10}, ${_depth11}, ${_depth12}`;


        console.log(x);
        elem.style.backgroundPosition = x;
        elem2.style.backgroundPosition = x2;
        elem3.style.backgroundPosition = x3;
        elem4.style.backgroundPosition = x4;
        elem5.style.backgroundPosition = x4;
    }

})();
