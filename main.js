var canvas = new fabric.Canvas('myCanvas')

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_objects = ""
var block_objects = ""

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_objects = Img

    player_objects.scaleToWidth(150);
    player_objects.scaleToHeight(140);
    player_objects.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_objects);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_objects = Img
     
        block_objects.scaleToWidth(block_image_width);
        block_objects.scaleToHeight(block_image_height);
        block_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_objects);
    });
}





window.addEventListener("keydown", keypressed)

function keypressed(e)
{
    Monkeydown = e.keyCode
    console.log(Monkeydown)
    
    if(Monkeydown == "37"){
        left();
    }
    if(Monkeydown == "38"){
        up();
    }
    if(Monkeydown == "39"){
        right();
    }
    if(Monkeydown == "40"){
        down();
    }
    if(Monkeydown == "87"){
        new_image("wall.jpg")
        console.log("w")
    }
    if(Monkeydown == "71"){
        new_image("ground.png")
        console.log("g")
    }
    if(Monkeydown == "76"){
        new_image("light_green.png")
        console.log("l")
    }
    if(Monkeydown == "84"){
        new_image("trunk.jpg")
        console.log("t")
    }
    if(Monkeydown == "82"){
        new_image("roof.jpg")
        console.log("r")
    }
    if(Monkeydown == "89"){
        new_image("yellow_wall.png")
        console.log("y")
    }
    if(Monkeydown == "68"){
        new_image("dark_green.png")
        console.log("d")
    }
    if(Monkeydown == "85"){
        new_image("unique.png")
        console.log("u")
    }
    if(Monkeydown == "67"){
        new_image("cloud.jpg")
        console.log("c")
    }
    if(e.shiftKey == true && Monkeydown == "80"){
        block_image_height = block_image_height + 10
        block_image_width = block_image_width + 10
        document.getElementById("cool_span").innerHTML = block_image_width
        document.getElementById("cooler_span").innerHTML = block_image_height
    }
    if(e.shiftKey == true && Monkeydown == "77"){
        block_image_height = block_image_height - 10
        block_image_width = block_image_width - 10
        document.getElementById("cool_span").innerHTML = block_image_width
        document.getElementById("cooler_span").innerHTML = block_image_height
    }
    
}
function up( ){
if(player_y >= 0){
    player_y = player_y - block_image_height
    canvas.remove(player_objects)
    player_update()
    }
}
function down( ){
    if(player_y <= 500){
        player_y = player_y + block_image_height
        canvas.remove(player_objects)
        player_update()
        }
    }
    function left( ){
        if(player_x >= 0){
            player_x = player_x - block_image_width
            canvas.remove(player_objects)
            player_update()
            }
        }
        function right( ){
            if(player_x <= 900){
                player_x = player_x + block_image_width
                canvas.remove(player_objects)
                player_update()
                }
            }