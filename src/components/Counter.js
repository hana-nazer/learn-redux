import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {conuterActions } from '../store/index'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state =>state.counter)
  const show = useSelector(state=>state.showCounter)
const incrementHandler =()=>{
  dispatch(conuterActions.increment())
}
const decrementHandler =()=>{
  dispatch(conuterActions.decrement())
}

const increaseHandler =()=>{
  dispatch(conuterActions.increase(5))
}

  const toggleCounterHandler = () => {
    dispatch(conuterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
