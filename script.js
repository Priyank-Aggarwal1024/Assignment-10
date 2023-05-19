todos = [
    {
        name: "buy eggs",
        id: "1",
        done: false
    },
    {
        name: "sleep",
        id: "2",
        done: true
    },
    {
        name: "eat",
        id: "3",
        done: false
    },
    {
        name: "movie",
        id: "4",
        done: true
    },
    {
        name: "study",
        id: "5",
        done: true
    }
]
const todoContainer=document.getElementById("todo-container")

function render(){
    todoContainer.innerHTML=""
    todos.forEach(item => {
        todoContainer.appendChild(getTodo(item))
    })
}


function getTodo(item){
    // {
    //     name: "buy eggs",
    //     id: "1",
    //     done: false
    // }

    //<div  class="todo">
   // <input id="3" type="checkbox"><label for="3">do assingment</label>
   // </div>

   const container = document.createElement("div")
   container.classList.add("todo")
   const input = document.createElement("input")
   input.id = item.id;
   input.checked = item.done;
   input.type = "checkbox";
   container.appendChild(input);
    input.addEventListener("change",()=>{
        item.done=!item.done
        render()
    })
   const label = document.createElement("label")
   if(item.done){
    label.classList.add("cut")
   }
   label.htmlFor = item.id;
   label.innerText = item.name;
   container.appendChild(label);

   return container
}

render()