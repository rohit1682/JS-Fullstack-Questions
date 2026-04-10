import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import "./styles.css";

export default function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
