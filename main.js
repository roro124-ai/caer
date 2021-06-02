canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width= 120;
car1_height= 70;
car1_image="car1.png";
car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_height= 70;
car2_image="rover.png";
car2_x= 10;
car2_y= 10;
background_image = "racing.jpg";






function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;



}

function uploadcar1() {

    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);


}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up arrow key");

    }

    if (keyPressed == '40') {
        down();
        console.log("down arrow key");

    }
    if (keyPressed == '37') {
        left();
        console.log("left arrow key");


    }

    if (keyPressed == '39') {
        right();
        console.log("right arrow key");

    }
    if (keyPressed == '87') {
        up();
        console.log("key w");

    }
    if (keyPressed == '83') {
        down();
        console.log("key s");

    }
    if (keyPressed == '65') {
        left();
        console.log("key a");

    }

    if (keyPressed == '68') {
        right();
        console.log("key d");

    }




}


function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x =" + car1_x + "| y = " + car1_y);
        uploadcar1();
        uploadBackground();


    }


}


function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x =" + car1_x + "| y = " + car1_y);
        uploadcar1();
        uploadBackground();
    }


}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("when right arrow is pressed, x =" + car1_x + "| y = " + car1_y);
        uploadRover();
        uploadBackground();
    }

}

function left() {
    if (car1_x >= 0){car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x =" + car1_x + "| y = " + car1_y);
        uploadRover();
        uploadBackground();
    }
        
}




