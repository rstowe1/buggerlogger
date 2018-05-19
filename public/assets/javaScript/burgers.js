$(function () {
  $(".submit").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    var newBurger = {
      burger: newBurger
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function () {
        console.log("Added a new burger" + newBurger);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newburger = {
      name: $("#bu").val().trim(),
      burger: $("[name=burger]:checked").val().trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created a new burger");
        location.reload();
      }
    );

    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });