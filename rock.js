
function rock(){

 
  
    c.fillStyle = "red";
   
   c.fillRect(initX, initY,80,26);
   

    
    
    initY++;  // współrzędna Y zwiększa się o 1 pixel (przesuwa się w dół wg osi y);
    
  
    
    if(initY>=400 && initY>=10){
    
         initY=0;
         initX=Math.random()*620;
         
    }
    
   


    }
  


   




    

    