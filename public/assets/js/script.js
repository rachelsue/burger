// $("#submit").on("click", function(event) {
//       event.preventDefault();
  
//       let name = $("#name").val().trim();
  
//       if (name === "") {
//           alert ("Please enter a name.");
//       }
//     });

    $("#submit").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger: $("#submit [name=burger]").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      //newBurger doesnt show, 
    