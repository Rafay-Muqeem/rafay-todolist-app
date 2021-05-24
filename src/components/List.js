import React,{useState} from 'react';

function List(props) {

    let [togg,setTogg] = useState(false);

    console.log(togg);
    const handleToggle = () => {
        setTogg(!togg);
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
                            <button className=" btn btn-dark col-6 fa fa-angle-down" onClick={ () => handleToggle() } >Description</button>
                            {togg === true? <div className="card m-3"><p className="card-body">{todoObj.desc}</p></div> : null }
                        </li>
                        
                    )}
                </ul>
                <button onClick={ () => props.Del_all()} className="btn btn-danger col-12">Delete All</button>
            </div>
        );
    }
}

export default List;