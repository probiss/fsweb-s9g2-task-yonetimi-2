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
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-md">
      <h3 className= "text-lg text-yellow-600" >{taskObj.title}</h3>
      <div className="text-xs pt-1"> Son Teslim: <span className= {difference <=3 ? "text-xs pt-1 text-red-600 bg-red-100": "" } >{timeLeft + " " + aga} </span> </div>
      <p className="px-2 py-3 text-sm text-gray-500" >{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1.5 px-3 text-sm border border-slate-300 border-solid mr-1 mb-2 rounded-3xl " key={p}>{p}</span>
        ))}
      </div >
      {onComplete && <button className="block py-2 px-3 ml-auto bg-orange-200 shadow-md hover:shadow-lg rounded border-0 cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
