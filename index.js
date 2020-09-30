
    
$("#green").click(function(){ 
     
    
      var num=1;     
      makesound(num);
      $(".green").addClass("pressed");
      $(".body").addClass("background_color");
       setInterval(release, 100);
     function release(){
         $(".green").removeClass("pressed");
         $(".body").removeClass("background_color");
         } 

        
                    
});
$("#red").click(function(){ 

    var num=2;
    makesound(num);
    $(".red").addClass("pressed");
    $(".body").addClass("background_color");
    setInterval(release, 100);
     function release(){
         $(".red").removeClass("pressed"); 
         $(".body").removeClass("background_color");
    } 

});
$("#yellow").click(function(){ 
    var num=3;
    makesound(num);
    $(".yellow").addClass("pressed");
    $(".body").addClass("background_color");
    setInterval(release, 100);
     function release(){
         $(".yellow").removeClass("pressed");
         $(".body").removeClass("background_color");
         } 
});
$("#blue").click(function(){ 
    var num=4;
    makesound(num);
    $(".blue").addClass("pressed");  
    $(".body").addClass("background_color");  
    setInterval(release, 100);
     function release(){
         $(".blue").removeClass("pressed"); 
         $(".body").removeClass("background_color");
        } 
});


function makesound(num)
{   
    
    switch(num)
     {
        case 1:                             
                   var green = new Audio('sounds/green.mp3');
                            green.play();
                                               
                          break;
        case 2: var red = new Audio('sounds/red.mp3');
                red.play();
                    
                     break;
        case 3:  var yellow = new Audio('sounds/yellow.mp3');
                yellow.play();
                 
                   break;
        case 4: var blue = new Audio('sounds/blue.mp3');
                   blue.play();
                   
               break;  
            
     }
     var randomnumber1=(Math.random()*10)+1;  
     if(randomnumber1<=4){
          makenoise();
          $("h1").text("Game Over Press a key TO Restart.");
          gameoverca();
         var gameover=1;
     }
   

    
     
      
}
function makenoise(){ 
    var wrong = new Audio('sounds/wrong.mp3');
     wrong.play();  
}
function gameoverca(){
    
    makenoise();
    document.addEventListener("keypress",function(event){ 
        $("h1").text("level 1:");        
   
});

}

