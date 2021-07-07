$(function() {
    function grow(width) {
        $("#circle").css("width", parseInt(
            $("#circle").css("width")) + width + "px");
        $("#circle").css("height", parseInt(
            $("#circle").css("height")) + width + "px")
    }
    setInterval(grow, 250, 10);


    $("#circle").click(function() {
        $(this).hide();
    });

    $("#s").click(function() {
        let w = $("#w").val();
        let g = $("#g").val();
        let i = $("#i").val();
        grow(w);


        $("#circle").show();
    });




});