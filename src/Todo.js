import React, {Component} from "react";
let getId = '';
class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            item: "",
            todoItem:[]
        }
        // binding all the functions 
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addData = this.addData.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    }
    onChangeHandler(event){
        var inputVal = event.target.value;
         this.setState({
            item:inputVal
        })
    }
    addData(){
        var inputVal = this.state.item;
        var itemInstance = this.state.todoItem;
        itemInstance.push(inputVal);
        this.setState({
            todoItem:itemInstance,
            item:""
        })
        console.log(itemInstance)
    }
    delete(event){
        var id = event.target.id;
        var itemInstance = this.state.todoItem;
        itemInstance.splice(id,1);
        this.setState({
            todoItem:itemInstance,
            item:""
        })
    }
    edit(event){
        getId = event.target.id;
        this.setState({
            item:this.state.todoItem[event.target.id]
        });
        document.getElementById('addItem').style.display = "none";
        document.getElementById('update').style.display = "block";
        event.target.parentNode.style.borderBottom = "2px solid red";
        event.target.style.display="none";

    }
    update(){
        
        var todoInstance = this.state.todoItem;
        todoInstance[getId]=this.state.item;
        this.setState({
            todoItem:todoInstance,
            item:""
        });
        document.getElementById('addItem').style.display = "block";
        document.getElementById('update').style.display = "none";
        document.getElementsByClassName("edit")[getId].parentNode.style.borderBottom = "none";
        document.getElementsByClassName("edit")[getId].style.display = "block";
    }

    render(){
        var itemList = this.state.todoItem.map((e,i)=>
        <li key={i}><span id="indexing">{i+1}.</span>
        <span className="delete btn btn-danger" onClick={this.delete} id={i}>X</span>
        <span className="edit btn btn-success" onClick={this.edit} id={i}>edit</span>
        <blockquote>{e}</blockquote> </li>
        )
        return (
        <div>
            <div className="header">Todo App</div>
            <div className="body">
                <ul>
                    {itemList}
                </ul>
            </div>
            <div className="footer">
                <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                <button type="button" id="addItem" onClick = {this.addData}>+</button>
                <button type="button" id="update" onClick = {this.update}>Update</button>
            </div>
        </div>
        )
    }
}

export default Todo;
// Done
