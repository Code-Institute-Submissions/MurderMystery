/*When document opens hide these*/

$(document).ready(function() {

   $("#glen-wright").hide();
   $("#jim-green").hide();
   $("#addy-mire").hide();

});

/*When button is pressed*/

$("#submit-button").click(function() {
    
    const convictSelect = document.getElementById("convict");
    let selectedText = convictSelect.options[convictSelect.selectedIndex].text;
    
    /*if the select text is this show the text related to them*/
    if (selectedText == "Glen Wright") {
        $("#glen-wright").show();

    /*if the select text is this show the text related to them*/
    } else if (selectedText == "Jim Green") {
        $("#jim-green").show();

    /*if the select text is this show the text related to them*/
    } else if (selectedText == "Addy Mire"){
        $("#addy-mire").show();
    }
});