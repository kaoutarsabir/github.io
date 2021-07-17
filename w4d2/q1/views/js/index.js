$(() => {
    $("#ask").click(() => {
        $.get("/8ball",function(data){
            $("#question").val(data.answer);
        });
    });
});