

var currentNumber =1;
var num1;
var num2;
var click = 1;



var $screen = $("#screen");
var $number = $(".number"); 

//when someone clicks on a number, it
 //saves the number to do the math
  $number .on ('click',function() {
if (click> 8){
   return;
}

     var numberpressed = $(this).html();
      $screen.append(numberpressed); 
   
   if (currentNumber ==1) { 
   if (num1 == null){
   num1 = numberpressed;
   }else   { num1 =num1 + numberpressed;}

   }
   
   
   if (currentNumber ==2)
   {
   if (num2 == null){
  num2 = numberpressed;
   }else   { num2 =num2 + numberpressed;}

   }
   
     
   });
      
function more(){
if(click>8){
click=click - 5;
}
if (currentNumber == 2) {
   findAnswer();
   $screen.empty();
   $screen.append(num1);
}
currentNumber = 2
}




      $("#plus").on('click',  function()

      {
         more();
         $screen.append ("+") ; op = "+";
   })

     
   $("#minus").on('click',  function()
   {
      more();
      $screen.append ("-") ; op = "-";


})
$("#multiply").on('click',  function()
{
   more();
   $screen.append ("x") ; op = "x";


})
$("#divide").on('click',  function()
{
   more();
   $screen.append ("/") ; op = "/";


})

    $("#clear").on('click' , function()
    {$screen.empty();
      
     num1=null;
     num2= null ;
currentNumber= 1;
click= 1;
   });




   function findAnswer(){
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      console.log(num1,op,num2)
      if (op =="+") {
      answer = num1 + num2;
      }
      
      if (op =="-") {
         answer = num1 - num2;
       }
      
       if (op =="/") {
            answer = num1 / num2; 
       }
      
       if (op =="x") {
               answer = num1 * num2;
      }
             
      num1 =answer
      num2 = null
            
      currentNumber=1;
      }


 $("#equal").on('click', function () 
   {
      
      $screen.append("");
      findAnswer ();
      console.log(answer);
      if (click > 8){
      $screen.empty();
      var answerLength =answer.toString();
      click = answerLength.length;
      }
      
      $screen.append(answer);
      });


     

      $("#num1").on('click ', function()
      {$("#screen").append(1); }) 

       $("#num1").on('click ', function ()
       {$("#screen").append(2); }) 


       $("#num1").on('click ', function ()
       {$("#screen").append(3); }) 


       $("#num1").on('click ', function ()
       {$("#screen").append(4); }) 


       $("#num1").on('click ', function ()
       {$("#screen").append(5); }) 


       $("#num1").on('click ',function ()
       {$("#screen").append(6); }) 



       $("#num1").on('click ', function ()
       {$("#screen").append(7); }) 



       $("#num1").on('click ', function ()
       {$("#screen").append(8); }) 



       $("#num1").on('click ',function ()
       {$("#screen").append(9); }) 



       $("#num1").on('click ', function ()
       {$("#screen").append(0); }) 



       $("#num1").on('click ', function ()
       {$("#screen").append("."); }) 



                