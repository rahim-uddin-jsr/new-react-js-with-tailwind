import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border rounded-lg p-12 shadow-sm hover:shadow-md transition-all">
        <button
          className="bg-green-200 hover:bg-green-300 transition-all px-5 w-full mb-5 py-3 font-semibold text-2xl rounded-2xl"
          aria-label="Decrement Value by 2"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment Value by 2
        </button>
        <div>
          <button
            className="bg-green-200 hover:bg-green-300 transition-all px-5 py-3 font-semibold text-2xl rounded-2xl"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="w-28 text-center inline-block transition-all py-3 font-semibold text-2xl">
            {count}
          </span>
          <button
            className="bg-yellow-200 hover:bg-yellow-300 transition-all px-5 py-3 font-semibold text-2xl rounded-2xl"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <button
          className="bg-yellow-200 hover:bg-yellow-300 transition-all px-5 w-full mt-5 py-3 font-semibold text-2xl rounded-2xl"
          aria-label="Decrement Value by 2"
          onClick={() => dispatch(decrementByAmount(2))}
        >
          Decrement Value by 2
        </button>
      </div>
    </div>
  );
};

export default Counter;
