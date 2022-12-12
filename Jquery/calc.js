$(document).ready(function() {
    $("button").click(function() {
        // wiil return inner html of button clicked
        let opr = $(this).html();
        let expression = $("#box_1").val() + opr + $("#box_2").val();
        let result = eval(expression);
        $("#box_3").val(result);
    });
});