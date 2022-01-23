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


