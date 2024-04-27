function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    var sky = color(51,153,255);
    var skyH = windowHeight/3

    background(220);

    noStroke();
    fill(sky);
    rect(0,0,windowWidth,skyH);
    
    fill(255,255,255);
    circle(windowWidth/2,windowHeight/2-100,100);

    circle(windowWidth/2,windowHeight/2+10,150);

    fill(0,0,0);
    circle(windowWidth/2-15,windowHeight/2-100,10);
    circle(windowWidth/2+15,windowHeight/2-100,10);
    circle(windowWidth/2,windowHeight/2+15,15);
    circle(windowWidth/2,windowHeight/2-10,15);
    circle(windowWidth/2,windowHeight/2-35,13);
    
    fill(235,100,10)
    triangle(510, 285, 515, 300, 480, 310);
    circle(windowWidth/2,windowHeight/2-87,16);

    fill(90,60,0)
    triangle(460,345,350,300,450,350)
    triangle(710,345,565,340,575,350)

  }