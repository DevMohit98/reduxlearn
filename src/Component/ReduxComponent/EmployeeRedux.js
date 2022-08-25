import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelected } from "../../Redux/Slices/EmployeeSlice";
const EmployeeRedux = () => {
  const employees = useSelector((state) => state.Employee);
  const { employee } = employees;
  const dispatch = useDispatch();
  const UpdateList = (empId) => {
    dispatch(updateSelected(empId));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary mt-3">Employee's</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {employee.map((item) => {
                return (
                  <>
                    <li key={item.id} className="list-group-item">
                      <input
                        type="checkbox"
                        onChange={() => UpdateList(item.id)}
                        className="form-check-input me-2"
                      />
                      {item.Name}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6">
            {employee.map((item) => {
              return (
                <div key={item.id}>
                  {item.isSelected && (
                    <ul className="list-group">
                      <li className="list-group-item">{item.Name}</li>
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeRedux;
