import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  markSingleNotification,
  markAllNotification,
} from "../Redux/Slices/NotificationSlice";
const Message = () => {
  const Notification = useSelector((state) => state.notification);
  const { notifcation } = Notification;
  const dispatch = useDispatch();
  const readSingle = (nId) => {
    dispatch(markSingleNotification(nId));
  };
  const MarkAll = () => {
    let ids = [];
    notifcation.map((item) => {
      return ids.push(item.id);
    });
    dispatch(markAllNotification(ids));
  };
  return (
    <>
      {notifcation.map((item, index) => {
        const { id, title, has_read } = item;
        return (
          <div key={index}>
            {has_read === true ? (
              <h1
                className="h1"
                key={id}
                onClick={() => readSingle(id)}
                style={{ color: "red", cursor: "pointer" }}>
                {title}
              </h1>
            ) : (
              <h1
                className="h1"
                key={id}
                onClick={() => readSingle(id)}
                style={{ color: "green", cursor: "pointer" }}>
                {title}
              </h1>
            )}
          </div>
        );
      })}
      <button className="btn btn-primary" onClick={MarkAll}>
        Mark All Read
      </button>
    </>
  );
};
export default Message;
