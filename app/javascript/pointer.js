
let bubbletrail= {};



// Add public parameters with default values
bubbletrail.size= 10;
bubbletrail.jitter= 50;
bubbletrail.zindex= 5;
bubbletrail.life= 1000;



// Create after the page is loaded
let test = () => {
window.onload = () => {
  window.addEventListener('mousemove', function(e) {
    // Animate one dot
    let animate= (i) => {
      let j= (1-i)*bubbletrail.jitter;
      let bubble= document.createElement('div');
      let size= Math.ceil(Math.random()*bubbletrail.size*i);
      let sizepx= size+'px';
      bubble.style.position= 'fixed';
      bubble.style.top=  e.pageY +
        Math.round((Math.random()-0.5)*j - size/2) + 'px';
      bubble.style.left= e.pageX +
        Math.round((Math.random()-0.5)*j - size/2) + 'px';
      bubble.style.width= sizepx;
      bubble.style.height= sizepx;
      bubble.style.background= 'hsla(' +
        Math.round(Math.random()*360) + ', ' +
        '100%, ' +
        '50%, ' +
        i + ')';
      bubble.style.borderRadius= sizepx;
      bubble.style.pointerEvents= 'none';
      bubble.style.zIndex= bubbletrail.zindex +
        Math.round(5*(Math.random()-0.5));
      document.body.appendChild(bubble);
      window.setTimeout(function() {
        document.body.removeChild(bubble);
      }, Math.round(Math.random()*i*bubbletrail.life));
    };
    // Create a bunch of dots
    for (let i= 0.2; i <= 1.0; i+= 0.2) {
      animate(i);
    }
  });
};
};

export { test }
