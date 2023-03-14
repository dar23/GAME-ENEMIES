
function position(){

   if (x>position_end){  // koniec ruchu na osi x
   
   x=670;
   
   } 
   
   if (x<position_zero){  // początek  ruchu na osi x
     
   x=0;
   
   }
   
    if (y<position_zero_y){ // początek  ruchu na osi y
       
       y=0;
    }
      if (y>position_end_y){ // koniec ruchu na osi y
   
               y=370;
         
          }
}

function move(){
   if(LEFT){
       x-=speed;
   }
   if(UP){
       y-=speed;
   }
   if(RIGHT){
       x+=speed;
   }
   if(DOWN){
       y+=speed;
   }
}



window.addEventListener('keydown', change_key_down);

window.addEventListener('keyup', change_key_up);

function change_key_down(e){
       
   
switch(e.keyCode){
      
   case 39:

  RIGHT = true;
  
   
    break;
 
   case 37:

   LEFT = true;

      break;

    case 38:

    UP = true;
      break;
    

   case 40:
      DOWN = true;

      break;

}



} 





function change_key_up(keyup){
   

   switch(keyup.keyCode){
      case 39:

      RIGHT = false;
     
      
       break;
    
      case 37:
   
     LEFT = false;
   
         break;
   
       case 38:
   
       UP = false;
         break;
       
   
      case 40:
         DOWN = false;
   
         break;
   
   }
}












































  


