import List from './components/List';
import AddTodo from './components/addTodo';
import {connect} from 'react-redux';
import {Add_todo, Del_todo,Del_all} from './redux/ActionCreators';

const mapStateToProps = (state) => {
    return({
        state : state
    });
};

const mapDispatchToProps = (dispatch) => ({
    Add_todo: (todoObj) => dispatch(Add_todo(todoObj)),
    Del_todo: (id) => dispatch(Del_todo(id)),
    Del_all: () => dispatch(Del_all())
});

function Main(props) {
    
    return(
        <div>
            <List state = {props.state} Del_todo = {props.Del_todo} Del_all = {props.Del_all} />
            <AddTodo Add_todo = {props.Add_todo} />
        </div>
    );
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));