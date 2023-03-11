

window.addEventListener('keydown', change_key,false);



function change_key(key){
       
    if(key.keyCode == "39"){
x+=speed;

if(x>position_end){

x=670;

}

       
        }



if(key.keyCode=="37"){
 x-=speed;

if(x<position_zero){

x=0;

}

}


 if(key.keyCode=="38"){
 y-=speed;

 if(y<position_zero_y){
    
    y=0;
}

 }
 


 if(key.keyCode=="40"){
    y+=speed;

       if(y> position_end_y){

            y=370;
      
       }

    }


if(key.keyCode=="39" && key.keyCode=="40"){

 x+=speed;
 y+=speed;

}

if(key.keyCode=="38" && key.keyCode=="37"){

    x-=speed;
    y-=speed;
   
   }
   
   if(key.keyCode=="37" && key.keyCode=="39"){

x+=speed;
y+=speed;

}

if(key.keyCode=="40" && key.keyCode=="38"){

   x-=speed;
   y-=speed;
  
  }


}
