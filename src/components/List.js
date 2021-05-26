import React,{useState} from 'react';

function List(props) {

    let [Id,setId] = useState(null);

    const handleToggle = (id) => {
        setId(id);
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
                                <span>{todoObj.name}<button onClick={ () => props.Del_todo(todoObj.id)} className="btn btn-dark">X</button></span>
                                {Id !== todoObj.id? <button className=" btn btn-dark col-4 fa fa-angle-down" onClick={ () => handleToggle(todoObj.id) } >Description</button> : null}
                                {Id === todoObj.id? <button className="btn btn-dark col-4 fa fa-angle-right" onClick={ () => handleToggle(null) } >Close</button> : null}
                                {Id === todoObj.id? <div className="card m-3"><p className="card-body">{todoObj.desc}</p></div> : null }                    
                        
                            </li> 
                    )}
                </ul>
                <button onClick={ () => props.Del_all()} className="btn btn-danger col-12">Delete All</button>
            
            </div>
        );
    }
}

export default List;