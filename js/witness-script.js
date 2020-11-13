$(document).ready(function() {

   $("#witness-1-text").hide();
   $("#witness-2-text").hide();
   $("#witness-3-text").hide();

});

$("#witness-1").click(function() {
       $("#witness-1-text").toggle("slow");
   });

$("#witness-2").click(function() {
       $("#witness-2-text").toggle("slow");
   });

$("#witness-3").click(function() {
       $("#witness-3-text").toggle("slow");
   });