function updateBurger() {
    $("#add").click( () => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burgerName").val().trim(),
            eaten: 0
        };
       
        $.ajax('/api/burgers', {
            type: "POST",
            data: JSON.stringify(newBurger),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).then( () => {
            console.log("Burger added");
            location.reload();
        });
    });
    
    $(".eatBurger").click( function(event) {
        event.preventDefault();
        location.reload();
        
        let id = $(this).attr("key");
        console.log(id);

        let didEat = {
            eaten: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: JSON.stringify(didEat),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).then(function(){
            console.log("Burger eaten");
            location.reload();
        });
       
    });

    $(".uneat").click( function(event) {
        event.preventDefault();
        location.reload();
        
        let id = $(this).attr("key");
        console.log(id);

        let didEat = {
            eaten: 0
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: JSON.stringify(didEat),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).then(function(){
            console.log("Burger eaten");
            location.reload();
        });
       
    });

    
}

updateBurger();