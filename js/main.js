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
  });

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
  
 /*top-btn 애니메이션 시작*/
 let container = document.querySelector(".anim-explode-container");
 let svg = container.querySelector(".anim-explode");
 let numberOfShapes = 10;

 let shapes = [
	"M254 286.11a50 50 0 0050-50H204a50 50 0 0050 50z",
	"M255.5 271a20 20 0 10-20-20 20 20 0 0020 20zm0 30a50 50 0 10-50-50 50 50 0 0050 50z",
	"M248.8 202.17a8 8 0 019.4 0l40.6 29.5a8 8 0 012.9 8.94l-15.5 47.73a8 8 0 01-7.61 5.52h-50.18a8 8 0 01-7.61-5.52l-15.5-47.73a8 8 0 012.9-8.94z",
	"M307.5 250a50 50 0 11-50-50 50 50 0 0150 50",
	"M248.08 204.07a11.91 11.91 0 0116.84 0l30.59 30.59a11.91 11.91 0 11-16.85 16.85l-10.25-10.25v47.41a11.91 11.91 0 11-23.82 0v-47.41l-10.25 10.25a11.91 11.91 0 01-16.85-16.85z",
	"M234 237a22.5 22.5 0 0045 0h27.5a50 50 0 01-100 0z",
	"M258 202.5a12 12 0 00-12 12v26h-26a12 12 0 000 24h26v26a12 12 0 0024 0v-26h26a12 12 0 000-24h-26v-26a12 12 0 00-12-12z"
 ];

 container.addEventListener("mouseenter", (e) => {
	let animatedShapes = [];

	for (var i = 0; i < numberOfShapes; i++) {
		let newElement = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path"
		);
		newElement.setAttribute("d", gsap.utils.random(shapes));
		newElement.style.fill = gsap.utils.random([
			"#8EF6E4",
			"#A2D5F2",
			"#D59BF6",
			"#EDB1F1"
		]);
		svg.appendChild(newElement);
		animatedShapes.push(newElement);
	}

	function killShapes() {
		animatedShapes.forEach((shape) => {
			svg.removeChild(shape);
		});
	}

	gsap.set(animatedShapes, {
		transformOrigin: "center",
		scale: "random(0.4, 0.8)"
	});

	gsap.to(animatedShapes, {
		onComplete: killShapes,
		keyframes: [
			{
				rotate: "random(180, -180)",
				x: "random([-150, -100, -200, 200, 100, 150])",
				y: "random([-150, -100, -200, 200, 100, 150])",
				ease: "expo.out",
				duration: 4,
				stagger: {
					amount: 0.1
				}
			},
			{ opacity: 0, delay: -3 }
		]
	});
 });
 /*top-btn 애니메이션 끝*/





});