function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    var sky = color(51,153,255);
    var skyH = windowHeight/3
    var grassH = skyH*2;

    background(220);

    noStroke();
    fill(sky);
    rect(0,0,windowWidth,skyH);
    
    fill(49,242,11);
    rect(0,skyH,windowWidth,grassH);
    
    fill(255,0,0);
    rect(80,50,20);
    triangle(70, 75, 128, 20, 186, 75);

    fill(243,243,196);
    rect(88,75,80)

  }