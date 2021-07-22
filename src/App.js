import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import {dec, inc} from './redux/actions';

function App() {
  // const [count, setCount] = useState(0);

  // const inc = () => setCount(count + 1);

  // const dec = () => setCount(count - 1);
  const {count} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h2> Count : {count} </h2>
      <button onClick={() => dispatch(inc())}>INCREMENT</button>
      <button onClick={() => dispatch(dec())}>DECREMENT</button> */}
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
