



window.addEventListener('keydown', change_key_down,true);

function change_key_down(key){
       

switch(key.keyCode){
      
   case 39:

      x+=speed;
      break;
 
   case 37:

      x-=speed;
      break;

    case 38:

      y-=speed;
      break;

   case 40:

      y+=speed;
      break;

}



if (x>position_end){

x=670;

} else if (x<position_zero){

x=0;

}

 if (y<position_zero_y){
    
    y=0;
   
   }else if (y>position_end_y){

            y=370;
      
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



