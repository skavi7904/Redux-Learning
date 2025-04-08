import { useDispatch, useSelector } from "react-redux";
import { RootType } from "./store/store";
import {increment , decrement, decrementByAmount} from "./store/counter/counterSlice"



function App() {

  const count = useSelector((state: RootType) => state.counter.value);
  const dispatch = useDispatch();

  console.log(increment(),"kavi")
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <button onClick={()=>dispatch(decrementByAmount(5))}>custom dec</button>
    </>
  );
}

export default App
