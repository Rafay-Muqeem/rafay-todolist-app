import React,{useState} from 'react';

function Display(props) {

    let [id,setid] =  useState(Math.floor(Math.random() * 100));
    let [newName, setName] = useState('');
    let [newDesc, setDesc] = useState('');
    let [edit, setEdit] = useState(false);

    return(
        <>
            <List state = {props.state} Del_todo={props.Del_todo} 
            Del_all = {props.Del_all} 
            id={id} setid={setid} setName={setName} setDesc={setDesc}
            edit={edit} setEdit={setEdit}
            />
            <AddTodo Add_todo = {props.Add_todo}
             id={id} setid={setid} newName={newName} setName={setName} 
             newDesc={newDesc} setDesc={setDesc} 
             edit={edit} setEdit={setEdit}
            />
        </>
    );

    
}


export default Display;

// List Component!!!

export const List = (props) => {

    let [Id,setId] = useState(null);

    const handleToggle = (id) => {
        setId(id);
    }

    const editTodo = (id,name,desc) => {
        
        props.Del_todo(id);
        props.setid(id);
        props.setName(name);
        props.setDesc(desc);
        props.setEdit(!props.edit);
    }

    if(props.state.length === 0){
        return (
        <div className = "container col-12 text-center text-info">
            <p>"No ToDo in the list!!"</p>
        </div> 
        );
    }

    else{
        return(
            <div className="list">
                        
                <ul>
                    {props.state.map((todoObj,ind) =>
                        <li key = {ind}>
                            
                            <span>{todoObj.name}<div className="both-btn"><button onClick={ () => props.Del_todo(todoObj.id)} className="btn btn-dark mr-1">X</button>
                            <button onClick={ () => editTodo(todoObj.id,todoObj.name,todoObj.desc) } className="btn btn-dark fa fa-edit"></button></div></span>

                            {Id !== todoObj.id? <button className=" btn btn-dark col-4 fa fa-angle-down" 
                                onClick={ () => handleToggle(todoObj.id) } >Description</button> : null}
                            {Id === todoObj.id? <button className="btn btn-dark col-4 fa fa-angle-right"
                                onClick={ () => handleToggle(null) } >Close</button> : null}
                            {Id === todoObj.id? <div className="card m-3"><p className="card-body">{todoObj.desc}</p></div> : null }
                            
                        </li>
                    )} 
                    
                </ul>
                
                {props.state.length > 1 ? <button onClick={ () => props.Del_all()} className="btn btn-danger col-12">Delete All</button> : null}
            
            </div>
            
        );
    }
}

// Addtodo Component!!!

export const AddTodo = (props) => {

    const HandleTodo = (event) => {

        event.preventDefault();

        if(props.edit === true){
            props.setEdit(!props.edit);
            props.setid(Math.floor(Math.random() * 100));
        }
        
        props.Add_todo({
            id: props.id,
            name: props.newName,
            desc: props.newDesc
        })
        
        props.setName('');
        props.setDesc('');
        
    }
    
    return(
        
            <div className="addTodo">
                <h1>Add ToDo</h1>
                <form onSubmit = {HandleTodo} >
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" value={props.newName} onChange={(e) => props.setName(e.target.value)} required />
                    <input type="text" className="form-control"  placeholder="Description" aria-label="Description" aria-describedby="basic-addon1" value={props.newDesc} onChange={(e) => props.setDesc(e.target.value)} />
                    <input type="submit" className="btn btn-dark col-12" value={props.edit === false ? "Add" : "Edit"} aria-describedby="basic-addon1"></input>
                </form>
            </div>
                
        
    );
}
