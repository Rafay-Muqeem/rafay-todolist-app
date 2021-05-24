import React,{useState} from 'react';

function AddTodo(props) {
    let [newName, setName] = useState('');
    let [newDesc, setDesc] = useState('');
    let id =  Math.floor(Math.random() * 100);    

    const HandleTodo = (event) => {

        event.preventDefault();
        props.Add_todo({
            id: id,
            name: newName,
            desc: newDesc
        })

        setName('');
        setDesc('');
    }

    return(
        <div className="addTodo">
            <h1>Add ToDo</h1>
            <form onSubmit = {HandleTodo}>
                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" value={newName} onChange={(e) => setName(e.target.value)} required />
                <input type="text" className="form-control"  placeholder="Description" aria-label="Description" aria-describedby="basic-addon1" value={newDesc} onChange={(e) => setDesc(e.target.value)} />
                <input type="submit" className="btn btn-dark col-12" value="Add" aria-describedby="basic-addon1"/>
            </form>
        </div>
    );
}

export default AddTodo;