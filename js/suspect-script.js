$(document).ready(function() {

   $("#suspect-1-text").hide();
   $("#suspect-2-text").hide();
   $("#suspect-3-text").hide();

});

$("#suspect-1").click(function() {
       $("#suspect-1-text").toggle("slow");
   });

$("#suspect-2").click(function() {
       $("#suspect-2-text").toggle("slow");
   });

$("#suspect-3").click(function() {
       $("#suspect-3-text").toggle("slow");
   });

