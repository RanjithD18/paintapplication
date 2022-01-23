# Web Page for Paint Application

## AIM:

To design a static website for Paint Application using HTML5 canvas.

## DESIGN STEPS:

### Step 1:

Requirement collection.

### Step 2:

Creating the layout using HTML,CSS and canvas.

### Step 3:

Write javascript to capture move events.

### Step 4:

Perform the drawing operation based on the user input.

### Step 5:

Validate the layout in various browsers.

### Step 6:

Validate the HTML code.

### Step 6:

Publish the website in the given URL.

## PROGRAM :

### HTML Code:
~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paint Application</title>
    <link rel="stylesheet" href="./css/style.css" />
    <script type="text/javascript" src="./js/script.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <h1>Drawing Application</h1>
        <canvas id="myCanvas" width="400" height="400" style="border: 1px solid #000000">
        </canvas>
        <div class="toolbar">
          <input type="button" id="red" value="Red">
          <input type="button" id="blue" value="Blue">
          <input type="button" id="yellow" value="Yellow">
        </div>
        <div class="toolbar">

          <input type="button" id="circle" value="Circle" /> 
          <input type="button" id="square" value="Square" />
          <input type="button" id="rectangle" value="Rectangle" />
          <input type="button" id="triangle" value="Triangle" />
          
        </div>
        
      </div>
      <div class="footer">
         Developed by Ranjith D 21500662
      </div>
    </div>
    <script>

      var c= document.getElementById("myCanvas");
      
      var ctx= c.getContext("2d");
      
      shape = 0;
      
    
      
      c.addEventListener("click", myClickEvent); 
      document
        .getElementById("circle") 
        .addEventListener("click", circleclicked);
      
      document 
        .getElementById("square")
        .addEventListener("click", squareclicked); 
      document 
        .getElementById("rectangle")
        .addEventListener("click", rectangleclicked);
      document 
        .getElementById("triangle")
        .addEventListener("click", triangleclicked);
      
      
      document.getElementById("red").addEventListener("click", redClicked);
      
      document.getElementById("blue").addEventListener("click", blueClicked);
      
      document.getElementById("yellow").addEventListener("click", yellowClicked);
      
    </script>
  </body>
</html>
~~~
### CSS Code:
~~~
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    background-color: #DC143C;
    color: #208bc9;
  }
  .container {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
  }
  .content {
    display: block;
    width: 100%;
    background-color: #d4cfff;
    min-height: 800px;
    margin: 100px 50px 0px 0px;
    padding-top: 20px;
  }
  h1 {
    text-align: center;
  }
  canvas {
    margin-left: 340px;
    margin-right: 340px;
  }
  .toolbar {
    text-align: center;
  }
  .footer {
    display: block;
    width: 100%;
    height: 40px;
    background-color: #084475;
    text-align: center;
    padding-top: 10px;
    margin: 0px 0px 0px 0px;
    color: whitesmoke;
  }
  ~~~
  ### Javascript Code:
  ~~~
  var shape;
function myClickEvent(event) {
    
    

    ctx.beginPath();

    if (color == 1) {
        ctx.strokeStyle = 'red';
    } 
    else if (color == 2) {
        ctx.strokeStyle = 'yellow';
    } 
    else if (color == 3) {
        ctx.strokeStyle = 'blue';
    }
    if (shape== 0) { 
	    ctx.arc(event.offsetX, event.offsetY, 25, 0, 2 *Math.PI);

	    ctx.stroke();

	    ctx.lineWidth = 3;

    } 
    else if (shape == 1) {

	    ctx.rect(event.offsetX, event.offsetY, 40, 40);

	    

	    ctx.lineWidth = 3;

        ctx.stroke();
    }
    else if (shape == 2) {

	    ctx.rect(event.offsetX, event.offsetY, 80, 40);

	    

	    ctx.lineWidth = 3;

        ctx.stroke();
    }
    else if (shape == 3) {
        ctx.moveTo(event.offsetX, event.offsetY);
        ctx.lineTo(event.offsetX-40, event.offsetY);
        ctx.lineTo(event.offsetX-20, event.offsetY-40);
        ctx.closePath()

        ctx.stroke();
        
        ctx.lineWidth = 3;
        
        
    }
    
        
}
function circleclicked() {
    
    shape = 0;

} 
function squareclicked() {
    
    shape = 1;
}
function rectangleclicked() {
    
    shape = 2;
}
function triangleclicked() {
    
    shape = 3;
}


function redClicked() {
    color = 1;
}

function blueClicked() {
    color = 3;
}

function yellowClicked() {
    color = 2;
}
~~~

## OUTPUT:
![output](https://github.com/RanjithD18/paintapplication/blob/main/Screenshot%20(73).png)


## Result:

Thus a website is designed and validated for paint application using HTML5 canvas.
