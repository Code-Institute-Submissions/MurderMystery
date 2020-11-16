$(document).ready(function() {

   $("#evidence-1-text").hide();
   $("#evidence-2-text").hide();
   $("#evidence-3-text").hide();
   $("#evidence-4-text").hide();
   $("#diary-contents").hide();
   $("#incorrect-code").hide();



});

$("#evidence-1").click(function() {
       $("#evidence-1-text").toggle("slow");
   });

$("#evidence-2").click(function() {
       $("#evidence-2-text").toggle("slow");
   });

$("#evidence-3").click(function() {
       $("#evidence-3-text").toggle("slow");
   });

$("#evidence-4").click(function() {
       $("#evidence-4-text").toggle("slow");
   });

$(".code-button").click(function() {
    if ("#code-tb" === "Milo") {
        $("#diary-contents").show();
    } else {
        $("#incorrect-code").show();
    }
});