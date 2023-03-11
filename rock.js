function rock(){


  
    c.fillStyle = "red";
    c.fillRect(initX1, initY1,80,26);
   

    
    
    initY1=initY1+1.4;  // współrzędna Y zwiększa się o 1 pixel (przesuwa się w dół wg osi y);
    
  
    
    if(initY1>=400){
    
        initY1=0;
         initX1=Math.random()*640;
        
    }
   
 

    }



 function rock1(){

 
   
        c.fillStyle = "red";
        c.fillRect(initX2, initY,80,26);
       
    
        
        
        initY=initY+1;  // współrzędna Y zwiększa się o 1 pixel (przesuwa się w dół wg osi y);
        
      
        
        if(initY>=400){
        
             initY=0;
             initX2=Math.random()*600;
            
        }
       
   
    
        }
    
    
    
 
    

    