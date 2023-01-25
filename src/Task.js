import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
    const timeLeft = formatDistanceToNow(new Date(taskObj.deadline), {locale :tr });
    //console.log(timeLeft);
    const difference = differenceInDays(new Date(taskObj.deadline), new Date() );
    const aga = new Date(taskObj.deadline) - new Date() < 0 ? "geçti":"kaldı" ;
    const shine = difference <=3 ? true : false;
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline"> Son Teslim: <span className={difference <=3 ? "input-error": "" } >{timeLeft + " " + aga} </span> </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
