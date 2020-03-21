import React, { useState } from "react";
import DoneListItem from "./DoneListItem";

const doneListEmpty = Component => props =>
  props.title === "" ? <div>Nothing</div> : <Component {...props} />;
const DoneList = doneListEmpty(DoneListItem);

const Done = (props) => {
  const [doneList] = useState(
    JSON.parse(localStorage.getItem("doneList")) || []
  );

  return (
    <div className="App">
      <div>
        Done List
        <div className="add-form">
        <div>
          <button onClick={() => props.history.push("/")}>Back</button>
        </div>
      </div>
        {doneList.length < 1 ? (
          <div> Nothing </div>
        ) : (
          doneList.map(data => (
            <DoneList
              key={data.title}
              title={data.title}
              description={data.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Done;
