canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.jpg";

car1_height = 70;
car1_width = 120;

car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_height = 70;
car2_width = 150;

car2_image = "2.jpg";

car2_x = 10;
car2_y = 100;

function add(){
    background_img = new Image();
    background_img.onload = upload_background ; 
  background_img.src = background_image;

  car1_img  = new Image();
 car1_img.onload = upload_car1 ;
car1_img.src = car1_image ;


car2_img  = new Image();
car2_img.onload = upload_car2 ;
car2_img.src = car2_image ;

}
function upload_background(){
ctx.drawImage(background_img,0,0,canvas.width , canvas.height);

}
function upload_car1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width , car1_height);
    
    }
    function upload_car2(){
        ctx.drawImage(car2_img,car2_x,car2_y,car2_width , car2_height);
        
        }

    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keypress = e.keyCode;
        if(keypress == "37"){
            Left1();
        }
        if(keypress == "38"){
            Up1();
        }
        if(keypress == "39"){
            Right1();
        }
        if(keypress == "40"){
            Down1();
        }

        if(keypress == "65"){
            Left2();
        }
        if(keypress == "87"){
            Up2();
        }
        if(keypress == "68"){
            Right2();
        }
        if(keypress == "83"){
            Down2();
        }
    }
    function Up1(){
        if(car1_y >=0){
            car1_y = car1_y - 10;
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
    function Down1(){
        if(car1_y <=500){
            car1_y = car1_y + 10;
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
    function Left1 (){
        if(car1_x >= 0){
            car1_x = car1_x - 10;
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
    function Right1 (){
    
        if(car1_x < 680){
            car1_x = car1_x + 10;
            upload_background();
            upload_car1();
            upload_car2();
        }  
        }
       function Up2(){
        if(car2_y >=0){
            car2_y = car2_y - 10;
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
    function Down2(){
        if(car2_y <=500){
            car2_y = car2_y + 10;
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
    function Left2(){
        if(car2_x >= 0){
            car2_x = car2_x - 10;
            upload_background();
            upload_car1();
            upload_car2();
        }
    }
    function Right2(){
    
        if(car2_x < 650){
            car2_x = car2_x + 10;
            upload_background();
            upload_car1();
            upload_car2();
        }  
        }