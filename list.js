var toDos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

while (input !== "QUIT") {
    //handle input
    if (input === "LIST") {
        console.log(toDos);
    } else if (input === "NEW") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todo-list a new array
        toDos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");