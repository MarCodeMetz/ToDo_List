var toDos = ["Example"];

var input = prompt("What would you like to do?");

while (input !== "QUIT") {
    //handle input
    if (input === "LIST") {
        listToDos();
    } else if (input === "NEW") {
        newToDos();
    } else if (input === "DELETE") {
        deleteToDos();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");

function listToDos() {
    console.log("**********");
    toDos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function newToDos() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todo-list a new array
    toDos.push(newTodo);
    console.log("Added new ToDo");
}

function deleteToDos() {
    // ask for index of todo to be deleted
    var index = prompt("Enter index of todo you want to delete");
    // delete that todo with the splice() function
    toDos.splice(index, 1);
    console.log("Deleted ToDo");
}