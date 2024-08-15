// transition for first page 










gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lollz",
    start: "55% 50%",
    end: "350% 50%",
    scrub: true,
    pin: true,



  }
});




tl.to(".lollz", {
  scale: 3,
  duration: 200,
  ease: "power1.inOut",
  delay: 3
}, 'rc');

tl.to("#Hero", {
  duration: 200,
  y: 18,
  delay: 3
}, 'rc');

tl.to(".zamp", {
  scale: 1,
  duration: 200,
  transition: "all",
  delay: 10

}, 'rc');

tl.to(".em1", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');

tl.to(".em2", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');

tl.to(".em3", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');

tl.to(".em4", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');





var EXP = document.getElementById('exp');
var EMG = document.getElementById('emg');
var Parent = document.getElementById('parent');



let isExpanded2 = false;



EXP.addEventListener('click', () => {
  if (isExpanded2) {
    document.body.style.overflow = "auto"
    gsap.set(EXP, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%", });
    gsap.set(Parent, { duration: 0, padding: "0%", })
    gsap.set(EMG, { duration: 0, ease: "power4", scale: "1" })



    isExpanded2 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', bottom: 0, backdropFilter: "blur(10px)" });
    gsap.to(Parent, { duration: 0, padding: "14.5%", })
    gsap.to(EMG, { duration: 0, ease: "power1", scale: "0.7" })


    isExpanded2 = true;
  }
});










const EXP1 = document.getElementById('exp1');
const EMG1 = document.getElementById('emg1');
const Parent1 = document.getElementById('parent1');



let isExpanded3 = false;



EXP1.addEventListener('click', () => {
  if (isExpanded3) {
    document.body.style.overflow = "auto"
    gsap.set(EXP1, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG1, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent1, { duration: 0, padding: "0%", })



    isExpanded3 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP1, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG1, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent1, { duration: 0, padding: "14.5%", })


    isExpanded3 = true;
  }
});







const EXP2 = document.getElementById('exp2');
const EMG2 = document.getElementById('emg2');
const Parent2 = document.getElementById('parent2');



let isExpanded4 = false;



EXP2.addEventListener('click', () => {
  if (isExpanded4) {
    document.body.style.overflow = "auto"
    gsap.set(EXP2, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG2, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent2, { duration: 0, padding: "0%", })



    isExpanded4 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP2, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG2, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent2, { duration: 0, padding: "14.5%", })


    isExpanded4 = true;
  }
});





const EXP3 = document.getElementById('exp3');
const EMG3 = document.getElementById('emg3');
const Parent3 = document.getElementById('parent3');



let isExpanded5 = false;



EXP3.addEventListener('click', () => {
  if (isExpanded5) {
    document.body.style.overflow = "auto"
    gsap.set(EXP3, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG3, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent3, { duration: 0, padding: "0%", })



    isExpanded5 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP3, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG3, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent3, { duration: 0, padding: "14.5%", })


    isExpanded5 = true;
  }
});






const EXP4 = document.getElementById('exp4');
const EMG4 = document.getElementById('emg4');
const Parent4 = document.getElementById('parent4');



let isExpanded6 = false;



EXP4.addEventListener('click', () => {
  if (isExpanded6) {
    document.body.style.overflow = "auto"
    gsap.set(EXP4, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG4, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent4, { duration: 0, padding: "0%", })



    isExpanded6 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP4, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG4, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent4, { duration: 0, padding: "14.5%", })


    isExpanded6 = true;
  }
});





const EXP5 = document.getElementById('exp5');
const EMG5 = document.getElementById('emg5');
const Parent5 = document.getElementById('parent5');



let isExpanded7 = false;



EXP5.addEventListener('click', () => {
  if (isExpanded7) {
    document.body.style.overflow = "auto"
    gsap.set(EXP5, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG5, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent5, { duration: 0, padding: "0%", })



    isExpanded7 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP5, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG5, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent5, { duration: 0, padding: "14.5%", })


    isExpanded7 = true;
  }
});


const EXP6 = document.getElementById('exp6');
const EMG6 = document.getElementById('emg6');
const Parent6 = document.getElementById('parent6');



let isExpanded8 = false;



EXP6.addEventListener('click', () => {
  if (isExpanded8) {
    document.body.style.overflow = "auto"
    gsap.set(EXP6, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG6, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent6, { duration: 0, padding: "0%", })



    isExpanded8 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP6, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG6, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent6, { duration: 0, padding: "14.5%", })


    isExpanded8 = true;
  }
});



const EXP7 = document.getElementById('exp7');
const EMG7 = document.getElementById('emg7');
const Parent7 = document.getElementById('parent7');



let isExpanded9 = false;



EXP7.addEventListener('click', () => {
  if (isExpanded9) {
    document.body.style.overflow = "auto"
    gsap.set(EXP7, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG7, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent7, { duration: 0, padding: "0%", })



    isExpanded9 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP7, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG7, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent7, { duration: 0, padding: "14.5%", })


    isExpanded9 = true;
  }
});




const EXP8 = document.getElementById('exp8');
const EMG8 = document.getElementById('emg8');
const Parent8 = document.getElementById('parent8');



let isExpanded10 = false;



EXP8.addEventListener('click', () => {
  if (isExpanded10) {
    document.body.style.overflow = "auto"
    gsap.set(EXP8, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG8, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent8, { duration: 0, padding: "0%", })



    isExpanded10 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP8, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG8, { duration: 0, ease: "power4", scale: "0.8" })
    gsap.to(Parent8, { duration: 0, padding: "12%", })


    isExpanded10 = true;
  }
});


const EXP9 = document.getElementById('exp9');
const EMG9 = document.getElementById('emg9');
const Parent9 = document.getElementById('parent9');



let isExpanded11 = false;



EXP9.addEventListener('click', () => {
  if (isExpanded11) {
    document.body.style.overflow = "auto"
    gsap.set(EXP9, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG9, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent9, { duration: 0, padding: "0%", })



    isExpanded11 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP9, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG9, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent9, { duration: 0, padding: "14.5%", })


    isExpanded11 = true;
  }
});


const EXP10 = document.getElementById('exp10');
const EMG10 = document.getElementById('emg10');
const Parent10 = document.getElementById('parent10');



let isExpanded12 = false;



EXP10.addEventListener('click', () => {
  if (isExpanded12) {
    document.body.style.overflow = "auto"
    gsap.set(EXP10, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG10, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent10, { duration: 0, padding: "0%", })



    isExpanded12 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP10, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG10, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent10, { duration: 0, padding: "14.5%", })


    isExpanded12 = true;
  }
});



const EXP11 = document.getElementById('exp11');
const EMG11 = document.getElementById('emg11');
const Parent11 = document.getElementById('parent11');



let isExpanded13 = false;



EXP11.addEventListener('click', () => {
  if (isExpanded13) {
    document.body.style.overflow = "auto"
    gsap.set(EXP11, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG11, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent11, { duration: 0, padding: "0%", })



    isExpanded13 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP11, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG11, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent11, { duration: 0, padding: "14.5%", })


    isExpanded13 = true;
  }
});





const EXP12 = document.getElementById('exp12');
const EMG12 = document.getElementById('emg12');
const Parent12 = document.getElementById('parent12');



let isExpanded14 = false;



EXP12.addEventListener('click', () => {
  if (isExpanded14) {
    document.body.style.overflow = "auto"
    gsap.set(EXP12, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG12, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent12, { duration: 0, padding: "0%", })



    isExpanded14 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP12, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG12, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent12, { duration: 0, padding: "14.5%", })


    isExpanded14 = true;
  }
});





const EXP13 = document.getElementById('exp13');
const EMG13 = document.getElementById('emg13');
const Parent13 = document.getElementById('parent13');




let isExpanded15 = false;



EXP13.addEventListener('click', () => {
  if (isExpanded15) {
    document.body.style.overflow = "auto"
    gsap.set(EXP13, { duration: 0, ease: "power4", cursor: "zoom-in", position: 'static', height: "100%", width: "100%" });
    gsap.set(EMG13, { duration: 0, ease: "power4", scale: "1" })
    gsap.set(Parent13, { duration: 0, padding: "0%", })



    isExpanded15 = false;
  } else {
    document.body.style.overflow = "hidden"
    gsap.to(EXP13, { duration: 0, ease: "power4", cursor: "zoom-out", position: 'Fixed', height: "100vh", width: "100vw", zIndex: 30, top: "0px", backgroundColor: "rgba(0, 0, 0 , 0.7)", left: '0px', right: '0px', backdropFilter: "blur(10px)" });
    gsap.to(EMG13, { duration: 0, ease: "power4", scale: "0.7" })
    gsap.to(Parent13, { duration: 0, padding: "14.5%", })


    isExpanded15 = true;
  }
});






// Get all image containers
const imageContainers = document.querySelectorAll("#elem1");

// Add a mousemove event listener to each image container
imageContainers.forEach((container) => {
  const image = container.querySelector("img");

  container.addEventListener("mousemove", function (event) {
    // Calculate the position relative to the container
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const imageX = x + image.width - 280;  // Adjust this value as needed

    // Use GSAP for smooth animation
    gsap.to(image, {
      x: imageX,
      y: y,
      duration: 1.5,  // Adjust duration as needed
      ease: "expo"  // Adjust ease type as desired (e.g., ease, power2.out, etc.)
    });
  });
});


// show more funtionality 






// Flag to track the toggle state
let isExpanded = false;
let originalHeight; // Will be determined dynamically

// Function to calculate and set originalHeight
function setOriginalHeight() {
  const content = document.querySelector('#showmore');
  originalHeight = window.getComputedStyle(content).maxHeight;


}

// Combined function to handle button text toggle, max-height animation, and scroll listener
function toggleContent() {
  // Ensure originalHeight is set if it's not already
  if (!originalHeight) {
    setOriginalHeight();


  }


  // Get the button and content elements
  const btn = document.querySelector('#showimages');
  const content = document.querySelector('#showmore');

  // Determine the new max-height and button text based on the current state
  const newMaxHeight = isExpanded ? originalHeight : "100%";
  const newText = isExpanded ? "Show me more" : "Bring me back";

  // Animate the max-height change
  gsap.to(content, {
    maxHeight: newMaxHeight
  });









  // Update the button text
  btn.textContent = newText;

  // Flip the state
  isExpanded = !isExpanded;



}

// Add event listener to your button
document.querySelector('#showimages').addEventListener('click', toggleContent);





// INSTA LOGO



// const anim = gsap.timeline({


//   scrollTrigger: {
//   trigger: "#insta",
// pin: true,
// start: "top 8%",
// end: "+=60%",
//   }
// });






// TEXT ANIMATION


function breakTheText() {



  var h1 = document.querySelector(".split")
  var h1Text = h1.textContent

  var splittedText = h1Text.split("")

  var clutter = ""

  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })



  h1.innerHTML = clutter


}

breakTheText()




var tw = gsap.timeline({

  scrollTrigger: {
    trigger: ".split",
    start: "center 80%",
    end: "center top",

  }
});

tw.from(".split span", {

  y: 140,
  opacity: 0,
  duration: 1,
  stagger: 0.05,
  ease: "back.out",


})


tw.from("#randomB", {


  duration: 0.6,
  opacity: 0,
  ease: "back.out"




})

// email verification


const emailInput = document.getElementById('backgroundIntoRed');
const Ealert = document.getElementById('Ealert');

emailInput.addEventListener('input', inputHandler);
emailInput.addEventListener('blur', blurHandler);

function inputHandler() { 
  const emailValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  if (emailRegex.test(emailValue) ) {
    gsap.to("#backgroundIntoRed", {
      border: "green solid 1px",
      duration: 0,
      ease: 'power4'
    });
    gsap.to("#Ealert", {
      display: "none"
    });
  }
}

function blurHandler() {
  const emailValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  if (!emailRegex.test(emailValue)) {
    gsap.to("#Ealert", {
      display: "flex"
    });
    gsap.to("#backgroundIntoRed", {
      border: "red solid 1px",
      duration: 0,
      ease: 'power4'
    });
  }
}

// not emty alert 


var changeBg = document.getElementById("backgroundChangeName");
var Alert2 = document.getElementById("nameAlert");

changeBg.addEventListener('input', inputHandler2);
changeBg.addEventListener('blur', blurHandler2);

function inputHandler2() {
  var inputValue = changeBg.value;
  if (inputValue && inputValue.length >= 3 && inputValue.length <= 15) {
    gsap.to("#backgroundChangeName", {
      border: "green solid 1px",
      duration: 0,
      ease: 'power4'
    });
    gsap.to('#nameAlert', {
      display: "none"
    });
    gsap.to('#show_alert2', {
      display: "none"
    });
  }
}

function blurHandler2() {
  var inputValue = changeBg.value;
  if (inputValue === "") {
    Alert2.innerText = "Cannot be empty";
    gsap.to('#nameAlert', {
      display: "flex"
    });
    gsap.to("#backgroundChangeName", {
      border: "red solid 1px",
      duration: 0,
      ease: 'power4'
    });
    gsap.to('#show_alert2', {
      display: "flex"
    });
  } else if (inputValue.length < 3) {
    Alert2.innerText = "Please enter at least 3 characters";
    gsap.to('#nameAlert', {
      display: "flex"
    });
    gsap.to("#backgroundChangeName", {
      border: "red solid 1px",
      duration: 0,
      ease: 'power4'
    });
    gsap.to('#show_alert2', {
      display: "flex"
    });
  } else if (inputValue.length > 15) {
    Alert2.innerText = "Please enter no more than 15 characters";
    gsap.to('#nameAlert', {
      display: "flex"
    });
    gsap.to("#backgroundChangeName", {
      border: "red solid 1px",
      duration: 0,
      ease: 'power4'
    });
    gsap.to('#show_alert2', {
      display: "flex"
    });
  }
}
// // for textera 



var textera = document.getElementById("backgroundChangetext");
var Alert3 = document.getElementById("textAlert");

textera.addEventListener('input', inputHandler3);
textera.addEventListener('blur', blurHandler3);

function inputHandler3() {
  var text = textera.value;
  if (text && text.length >= 10) {
    gsap.to(textera, {
      border: "green solid 1px",
      duration: 0,
      ease: 'power4'
    });
    gsap.to("#show_alert", {
      display: "none"
    });
  }
}

function blurHandler3() {
  var text = textera.value;
  if (text === "") {
    Alert3.innerText = "Message cannot be empty"; // show error message if value is empty
  } else if (text.length < 10) {
    Alert3.innerText = "Please enter at least 10 characters"; // show error message if value has less than 10 characters
  }
  if (text === "" || text.length < 10) {
    gsap.to("#show_alert", {
      display: "flex"
    });
    gsap.to(textera, {
      border: "red solid 1px",
      duration: 0,
      ease: 'power4'
    });
  }
}

const input1 = document.getElementById('backgroundChangeName');
const input2 = document.getElementById('backgroundIntoRed');
const textarea = document.getElementById('backgroundChangetext');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function() {
  const inputValue = input1.value;
  const emailValue = input2.value;
  const text = textarea.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (inputValue && inputValue.length >= 3 && inputValue.length <= 15 &&
      emailRegex.test(emailValue) &&
      text && text.length >= 10) {
    gsap.to("#loader", {
      display: "flex"
    });
    
    // Disable the submit button after 1 second
    setTimeout(function() {
      submitBtn.disabled = true;
    }, 100);
  }
});

// j

// for quickly with smooth view page


const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');

smoothScrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});



