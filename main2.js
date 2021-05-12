


 function myFunction(event){
   //document.querySelector("span").style.backgroundColor ="tomato";
   
     var x =  event.keyCode;
    switch(true){
        case x==48:
         document.calc.txt.value+='0'
          break;
          case x==49:
         document.calc.txt.value+='1'
          break;
          case x==50:
         document.calc.txt.value+='2'
          break;
          case x==51:
         document.calc.txt.value+='3'
          break;
          case x==52:
         document.calc.txt.value+='4'
          break;
          case x==53:
         document.calc.txt.value+='5'
          break;
          case x==54:
         document.calc.txt.value+='6'
          break;
          case x==55:
         document.calc.txt.value+='7'
          break;
          case x==56:
         document.calc.txt.value+='8'
          break;
          case x==57:
         document.calc.txt.value+='9'
          break;
          case x==42:
         document.calc.txt.value+='*'
          break;
          case x==43:
         document.calc.txt.value+='+'
          break;
          case x==45:
         document.calc.txt.value+='-'
          break;
          case x==47:
         document.calc.txt.value+='/'
          break;
           case x==8:
          document.calc.txt.value='';
           break;
           case x==46:
             document.calc.txt.value+='.';
             break;
           case x==13:
           document.calc.txt.value=eval(calc.txt.value);
           break;
          default:
              alert("Enter the Number only")
              
    }
    
//clear the number in input field   
      
 }
 window.addEventListener('keydown', function(e) {
  var a = e.keyCode;

  if(a==27 || a==46){
    document.calc.txt.value='';
  }
});

 //backspace in keyboard button
 window.addEventListener('keydown', function(e) {
  var a = e.keyCode;
 if(a==8){
  var lastDelete= document.calc.txt.value;
document.calc.txt.value = lastDelete.substring(0, lastDelete.length - 1); 
}
 });

 // backspace in mouse key
 function leg(){
  var lastDelete= document.calc.txt.value;
  document.calc.txt.value = lastDelete.substring(0, lastDelete.length - 1);
}; 

function squareRoot(){   
  var squareRoot= document.calc.txt.value;
  var sqrt = Math.sqrt(squareRoot);
  document.calc.txt.value = sqrt;
}

function sqaure(){
  var squared = document.calc.txt.value;
  var sqr = squared*squared;
  document.calc.txt.value = sqr;
}

function sqaureNumRoot(){
  var sqaureNumRoot = document.calc.txt.value;
  var sqrn = 1/sqaureNumRoot;
  

  document.calc.txt.value = sqrn;
}
 
