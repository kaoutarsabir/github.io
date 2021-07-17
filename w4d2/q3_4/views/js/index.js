$(() => {
    $("button").click(() => {
        const data = {
            id: this.data("pid"),
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(function(data){
            $("cartCount").html(data.count);
        })
            .fail(function(){
                alert("unable to add item")
            });
    });
});