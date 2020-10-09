import React from 'react'

//const TodoItem = (props) => {
    const TodoItem = ({id, labelName}) => {
        //props = {id: "learn-react", labelName: "Learn React"}
       
        // const id = props.id
       // const labelName = props.labelName
       //above two lines can be rewritten...
       //const {id, labelName} = props
       //the line above can be removed using destructuring and substituting id, labelName for props on line 1

       //going to convert following lines into JSX
       // return React.createElement(
       //     'div',
       //     {className: "todo-item"}, 
       //     [
       //         React.createElement("input", {type: "checkbox", id: id}),
        //        React.createElement("label", {htmlFor: id}, labelName),
       //     ]
       // )
       return <div className="TodoItem">
        <input type="checkbox" id={id}/>    
        <label htmlFor={id}>{labelName}</label>
       </div>  //{} around id above indicates a Javascript expression
    }

    export default TodoItem;
