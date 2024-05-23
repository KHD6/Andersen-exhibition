$(document).ready(function(){

  /*작품 슬라이드 시작*/
  var swiper3 = new Swiper(".fairytale-slide", {
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
    /*작품 슬라이드 끝*/
    
    /*로고 사라짐 시작*/
    $(".card").mouseover(function(){
      $("#profile h2").addClass("on")
    })
    $(".card").mouseout(function(){
      $("#profile h2").removeClass("on")
    })
    /*로고 사라짐 끝*/

    /*famous 시작*/
    const pictures = document.querySelectorAll('.Picture');
    var previousTouch = undefined;

    function updateElementPosition(element, event) {
     var movementX, movementY;

     if (event.type === 'touchmove') {
       const touch = event.touches[0];
       movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
       movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
       previousTouch = touch;
     } else {
       movementX = event.movementX;
       movementY = event.movementY;
     }
  
     const elementY = parseInt(element.style.top || 0) + movementY;
     const elementX = parseInt(element.style.left|| 0) + movementX;
 
     element.style.top = elementY + "px";
     element.style.left = elementX + "px";
    }

    function startDrag(element, event) {
      const updateFunction = (event) => updateElementPosition(element, event);
      const stopFunction = () => stopDrag({update: updateFunction, stop: stopFunction});
      document.addEventListener("mousemove", updateFunction);
      document.addEventListener("touchmove", updateFunction);
      document.addEventListener("mouseup", stopFunction);
      document.addEventListener("touchend", stopFunction);
    }

    function stopDrag(functions) {
      previousTouch = undefined;
      document.removeEventListener("mousemove", functions.update);
      document.removeEventListener("touchmove", functions.update);
      document.removeEventListener("mouseup", functions.stop);
      document.removeEventListener("touchend", functions.stop);
    }

    pictures.forEach(picture => {
      const range = 100;
      const randomX = Math.random() * (range * 2) - range;
      const randomY = Math.random() * (range * 2) - range;
      const randomRotate = Math.random() * (range / 2) - range / 4;
      const startFunction = (event) => startDrag(picture, event);
      picture.style.top = `${randomY}px`;
      picture.style.left = `${randomX}px`;
      picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
      picture.addEventListener("mousedown", startFunction);
      picture.addEventListener("touchstart", startFunction);
    }
  );

    /*famous 끝*/

    /*story-wrap.on 시작*/
    $("#story .story01 .book-box").click(function(){
      $("#story .story01 .story-wrap").addClass("on")
    });
    $("#story .story02 .book-box").click(function(){
      $("#story .story02 .story-wrap").addClass("on")
    });
    $("#story .story03 .book-box").click(function(){
      $("#story .story03 .story-wrap").addClass("on")
    });
    $("#story .story04 .book-box").click(function(){
      $("#story .story04 .story-wrap").addClass("on")
    });
    $(".story-wrap").click(function(){
      $(".story-wrap").removeClass("on")
    });
    /*story-wrap.on 끝*/
    





});