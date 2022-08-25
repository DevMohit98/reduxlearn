import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  const By5 = () => {
    setCounter(counter + 5);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3">count : {counter}</p>
                <button className="btn btn-success m-1" onClick={Increment}>
                  Increment
                </button>
                <button className="btn btn-warning m-1" onClick={Decrement}>
                  Decrement
                </button>
                <button className="btn btn-danger m-1" onClick={By5}>
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
export default Counter;
