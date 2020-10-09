import React from 'react'
import ReactDOM from 'react-dom'

import TodoItem from './TodoItem'       //can use './' asTodoItem.js and App.js are beside each other 
/*const App =() => {
    return React.createElement('div', {id: "my-todo-app", className: "my-todo-app"}, 
    [
        React.createElement('h1', {}, "My todo app"),
        React.createElement(TodoItem, {id: "learn-react", labelName: "Learn React"}),
        
        //React.createElement("input", {type: "checkbox", id: "create-todo-app"}),
        //React.createElement("label", {htmlFor: "create-todo-app"}, "Create a todo app"),
        //above two lines can be written as...
        React.createElement(TodoItem, {id: "create-todo-app", labelName: "Create a todo app"}),
        
        //React.createElement("input", {type: "checkbox", id: "profit"}),
        //React.createElement("label", {htmlFor: "profit"}, "Profit")
        //above two lines can be written as...
        React.createElement(TodoItem, {id: "profit", labelName: "Profit"}),
    ])
}
*/

const TodoItemsFromOutside = [
    {id: "learn-react", labelName: "Learn React"},
    {id: "create-todo-app", labelName: "Create a todo app"},
    {id: "profit", labelName: "Profit"}
]
const App = () => (
    <div id="my-todo-app" className="my-todo-app">
        <h1>My Todo App</h1>
        {TodoItemsFromOutside.map((item) => <TodoItem key={item.id} id={item.id} labelName={item.labelName} />) }

    </div>

)

//ReactDOM.render(React.createElement(App), document.getElementById("root"))
//React.createElement(App) == <Ap p />
ReactDOM.render(<App />, document.getElementById("root"))