import './App.css';
import Main from './Main';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import { useSpring, animated } from 'react-spring';


function App() {

  const animate = useSpring({
    from: {opacity: 0, margin:-500},
    to: {opacity:1, margin:0}
  })

  return (
        <Provider store = {store}>
          <animated.div style={animate}>
            <div className="myContainer">
              <h1 className="header">ToDo List</h1>
              <Main />
            </div>
          </animated.div>
        </Provider>
  );
}

export default App;
