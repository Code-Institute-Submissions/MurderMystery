/*When document opens hide these*/

$(document).ready(function() {

   $("#evidence-1-text").hide();
   $("#evidence-2-text").hide();
   $("#evidence-3-text").hide();
   $("#evidence-4-text").hide();
   $("#diary-contents").hide();
   $("#incorrect-code").hide();



});

/*Click button to show text*/
$("#evidence-1").click(function() {
       $("#evidence-1-text").toggle("slow");
   });
/*Click button to show text*/
$("#evidence-2").click(function() {
       $("#evidence-2-text").toggle("slow");
   });
/*Click button to show text*/
$("#evidence-3").click(function() {
       $("#evidence-3-text").toggle("slow");
   });
/*Click button to show text and hide the answer feedback*/
$("#evidence-4").click(function() {
       $("#evidence-4-text").toggle("slow");
       $("#diary-contents").hide("slow");
       $("#incorrect-code").hide("slow");
   });

/*Code is the value in the code text box*/
var code = $("#code-tb").val();

/*When button is pressed if the value in the text box is equal to Milo give the diary contents*/
$(".code-button").click(function() {

    var code = $("#code-tb").val();

    if (code === "Milo") {
        $("#diary-contents").show();
        $("#incorrect-code").hide();
    /*if incorrect show this contents*/
    } else {
        $("#incorrect-code").show();
        
    }
});