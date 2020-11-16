var canvas=new fabric.Canvas("myCanvas");
var playerx=30;
var playery=20;
var block_width=30;
var block_height=30;
var player_image="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(150);
        player_image.set({
            top:playery,left:playerx
        });
        canvas.add(player_image);
    });

}
function newImage(get_image) {
fabric.Image.fromURL(get_image,function(Img){
block_object=Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({top:playery,left:playerx});
canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    var asci=e.keyCode
    console.log(asci);
    if (e.shiftKey && asci  == '80') {
        block_width=block_width+10; 
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (e.shiftKey && asci  == '77') {
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (asci == "70") 
    {
        newImage('ironman_face.png');
        console.log("f");
    }
    if (asci == "66") 
    {
        newImage('spiderman_body.png');
        console.log("b");
    }
    if (asci == "76") 
    {
        newImage('hulk_legs.png');
        console.log("l");
    }
    if (asci == "82") 
    {
        newImage('thor_right_hand.png');
        console.log("r");
    }
    if (asci == "72") 
    {
        newImage('captain_america_left_hand.png');
        console.log("h");
    }
    if (asci == '38') 
    {
        up();
        console.log("up");
    }
    if (asci == '40') 
    {
        down();
        console.log("down");
    }
    if (asci == '37') 
    {
        left();
        console.log("left");
    }
    if (asci == '39') 
    {
        right();
        console.log("right");
    
    }
}
function up() {
    if (playery >= 0) {
        playery=playery-block_height;
        console.log("blockimage_height=" + block_height);
        console.log("up arrow,x=" + playerx + " y=" + playery);
        canvas.remove(player_image);
        player_update();
    }
}
function down() {
    if (playery <= 450) {
        playery=playery+block_height;
        console.log("blockimage_height" + block_height);
        console.log("down arrow,x=" + playerx + " y= " + playery);
        canvas.remove(player_image);
        player_update();
    }
}
function left() {
    if ( playerx >= 0) {
        playerx=playerx-block_width;
        console.log("blockimage_width" + block_width);
        console.log("left arrow,x=" + playery + " y=" + playery );
        canvas.remove(player_image);
        player_update();
    }
}
function right() {
    if ( playery <= 850) {
        playerx=playerx+block_width;
        console.log("blockimage_width" + block_width);
        console.log("right arrow,x=" + playery + " y=" + playery);
        canvas.remove(player_image);
        player_update();
    }
}