$(document).ready(function() {
    console.log("script loaded");
    // Add Burger button
    $("#addBurger").on("click", function(){
      console.log("Add Burger Button Clicked");
  
      let burger = {
        "burger_name": $(burgerName).val(),
        "devoured": $(burgerName).data("eaten")
      };
  
      $.post("/api/burger", burger).done((response)=>{
        console.log("Created a New Burger!");
        location.reload();
      });
  
    }); 
  
    // Update Burger  
  
    $(".burgerBlock").on("click", function(){
      console.log("Button Clicked");
  
      const burgerID = $(this).data("id");
      const devoured = $(this).data("eaten");
  
      const burgerUpdate = {
        "devoured": devoured
      };
  
      console.log("button id is " + burgerID);
  
      $.ajax("/api/burger/" + burgerID, {
        type: "PUT",
        data: burgerUpdate
      }).done((response)=>{
        console.log("Burger Updated");
        location.reload();
      });
  
    }); 
  
  });