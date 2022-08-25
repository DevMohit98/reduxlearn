import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, By5 } from "../../Redux/Slices/CounterSlice";
const CounterRedux = () => {
  const counterState = useSelector((state) => state.counter);
  const { count } = counterState;
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(increment());
  };
  const dec = () => {
    dispatch(decrement());
  };
  const by5 = () => {
    dispatch(By5(5));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3">count : {count}</p>
                <button className="btn btn-success m-1" onClick={inc}>
                  Increment
                </button>
                <button className="btn btn-warning m-1" onClick={dec}>
                  Decrement
                </button>
                <button className="btn btn-danger m-1" onClick={by5}>
                  Increment by 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CounterRedux;
