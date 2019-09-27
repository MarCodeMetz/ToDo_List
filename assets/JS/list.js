// check off specific todos by clicking 
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click on trashcan to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopProbagation();
});

// add a new todo to the list via input
$("input[type='text']").keypress(function (event) {
    // user hit the enter key in the input
    if (event.which === 13) {
        // grab input 
        var addTodo = $(this).val();
        $(this).val("");//clearing out input field
        // and add it as new todo to the list with the .append method
        $("ul").append("<li><span id='trashCan'><i class='fas fa-trash-alt'></i></span> " + addTodo + "</li>");
    };
});

// open and close the input form
$(".fa-plus-square").on("click", function () {
    $("input[type='text']").fadeToggle();
})