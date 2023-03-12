function rock(){

 
  
    c.fillStyle = "red";
    c.fillRect(initX, initR,80,26);
   

    
    
    initR=initR+3;  // współrzędna Y zwiększa się o 1 pixel (przesuwa się w dół wg osi y);
    
  
    
    if(initR>=400){
    
         initR=0;
         initX=Math.random()*630;
        
    }
   
 

    }




    function rock1(){

 
   
        c.fillStyle = "red";
        c.fillRect(initZ, initY,80,26);
       
    
        
        
        initY=initY+4.5;  // współrzędna Y zwiększa się o 1 pixel (przesuwa się w dół wg osi y);
        
      
        
        if(initY>=400){
        
             initY=0;
             initZ=Math.random()*630;
            
        }
       
     
    
        }
    
    
    
 
    

    