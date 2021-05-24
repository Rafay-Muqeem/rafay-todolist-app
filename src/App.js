import './App.css';
import Main from './Main';
import {Provider} from 'react-redux';
import {configureStore} from './redux/Store';

const store = configureStore();

function App() {

  return (
    <Provider store = {store}>
      <div className="myContainer">
        <h1 className="header">ToDo List</h1>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
