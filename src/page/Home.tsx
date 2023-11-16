import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { RootState } from "../redux/store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div>
          <button
            className="bg-green-200 px-5 py-3 font-semibold text-2xl rounded-2xl"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="px-5 py-3 font-semibold text-2xl">{count}</span>
          <button
            className="bg-yellow-200 px-5 py-3 font-semibold text-2xl rounded-2xl"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
