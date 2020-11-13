$(document).ready(function() {

   $("#glen-wright").hide();
   $("#jim-green").hide();
   $("#addy-mire").hide();

});

$("#submit-button").click(function() {
    
    const convictSelect = document.getElementById("convict");
    let selectedText = convictSelect.options[convictSelect.selectedIndex].text;
    
    if (selectedText == "Glen Wright") {
        $("#glen-wright").show();
    } else if (selectedText == "Jim Green") {
        $("#jim-green").show();
    } else if (selectedText == "Addy Mire"){
        $("#addy-mire").show();

    }
})