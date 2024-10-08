
window.onload = function() {
  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to change images to ordered images
  function changeToOrderedImages() {
    const images = document.querySelectorAll('#img');
    const imageUrls = [
      'materials/e.webp',
      'materials/d.webp',
      'materials/f.webp',
      'materials/a.webp',
      'materials/h.webp',
      'materials/i.webp',
      'materials/j.webp',
      // Add more image URLs as needed
    ];

    const shuffledImageUrls = shuffleArray(imageUrls);

    images.forEach((img, index) => {
      img.src = shuffledImageUrls[index];
    });
  }

  function changeToOrderedBackgrounds() {
    const elements = document.querySelectorAll('.background-element');
  
    const imageUrls = [
      'materials/main1.webp',
      'materials/main2.webp',
      'materials/n.webp',
      'materials/o.webp',
      'materials/m.webp',
      'materials/p.webp',
      'materials/l.webp',
      'materials/s.webp',
      'materials/v.webp',
      'materials/u.webp',
      'materials/x.webp',
      'materials/y.webp',
      'materials/k.webp',
      'materials/w.webp',
      'materials/a.webp',

      // Add more image URLs as needed
    ];
  
    // Repeat imageUrls until it's at least the same length as elements
    const repeatedImageUrls = [];
    while (repeatedImageUrls.length < elements.length) {
      repeatedImageUrls.push(...imageUrls);
    }
  
    const shuffledImageUrls = shuffleArray(repeatedImageUrls);
  
    elements.forEach((el, index) => {
      el.style.backgroundImage = `url(${shuffledImageUrls[index % shuffledImageUrls.length]})`;
    });
  }
  
  function changeImagesAndBackgroundsRandomly() {
    const images = document.querySelectorAll('#random');
    const backgrounds = document.querySelectorAll('#randomB');
    const imageUrls = [
      'materials/h.webp',
      'materials/main4.webp',
      'materials/main1.webp',
      'materials/main2.webp',
      'materials/main3.webp',
      'materials/main5.webp',
      'materials/m.webp',
      'materials/o.webp',
      'materials/s.webp',
      'materials/u.webp',
      'materials/x.webp',
      'materials/21.webp',
      // Add more image URLs as needed
    ];
  
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
  
    images.forEach((img) => {
      img.src = randomImageUrl;
    });
  
    backgrounds.forEach((bg) => {
      bg.style.backgroundImage = `url(${randomImageUrl})`;
    });
  }
  
  // Call all three functions when the page is reloaded
  changeToOrderedImages();
  changeToOrderedBackgrounds();
  changeImagesAndBackgroundsRandomly();
};



// DRAGABLE FUNCTION
let draggables = document.querySelectorAll('#draggable');
let mainDiv = document.getElementById('main-div');
let offsetXs = [];
let offsetYs = [];
let isDragging = false;
let activeDraggable = null;

// Function to get touch or mouse position
function getPosition(e) {
    if (e.touches) {
        return {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    } else {
        return {
            x: e.clientX,
            y: e.clientY
        };
    }
}

// Mouse and touch event listeners
draggables.forEach(function(draggable) {
    draggable.addEventListener('mousedown', startDrag);
    draggable.addEventListener('touchstart', startDrag);
});

function startDrag(e) {
    isDragging = true;
    activeDraggable = e.target;
    let index = Array.from(draggables).indexOf(activeDraggable);
    let pos = getPosition(e);
    offsetXs[index] = pos.x - activeDraggable.getBoundingClientRect().left;
    offsetYs[index] = pos.y - activeDraggable.getBoundingClientRect().top;
    
    if (e.type === 'touchstart') {
        e.preventDefault(); // Prevent default touchstart behavior
    }
}

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

let startX, startY, targetX, targetY;

function drag(e) {
    if (isDragging && activeDraggable) {
        e.preventDefault(); // Prevent default behavior
        let index = Array.from(draggables).indexOf(activeDraggable);
        let pos = getPosition(e);
        let offsetX = offsetXs[index];
        let offsetY = offsetYs[index];
        targetX = pos.x - offsetX;
        targetY = pos.y - offsetY;
        
        requestAnimationFrame(updatePosition);
    }
}

function updatePosition() {
    if (activeDraggable) {
        let x = activeDraggable.offsetLeft;
        let y = activeDraggable.offsetTop;
        
        // Easing function (you can adjust the easing amount to your liking)
        let easing = 0.5;
        x += (targetX - x) * easing;
        y += (targetY - y) * easing;
        
        activeDraggable.style.left = x + 'px';
        activeDraggable.style.top = y + 'px';
        activeDraggable.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px';
        activeDraggable.style.transform = 'scale(1.1)';
        if (Math.abs(targetX - x) < 1 && Math.abs(targetY - y) < 1) {
            // Stop animation when close enough to target
            return;
        }
        
        requestAnimationFrame(updatePosition);
    }
}

document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

function endDrag() {
    isDragging = false;
    if (activeDraggable) {
        activeDraggable.style.transform = 'scale(1)';
        activeDraggable.style.boxShadow = 'none';
        activeDraggable = null;
    }
}



// submint btn 








