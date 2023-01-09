import React, { useState } from "react"; //1. importar el hook useState

//create your first component
const Home = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  function encenderRojo() {
    if (color1 === "btn-danger") {
      setColor1("");
    } else {
      setColor1("btn-danger");
      setColor2("");
      setColor3("");
    }
  }
  function encenderAmarillo() {
    if (color2 === "btn-warning") {
      setColor2("");
    } else {
      setColor2("btn-warning");
      setColor1("");
      setColor3("");
    }
  }
  function encenderVerde() {
    if (color3 === "btn-success") {
      setColor3("");
    } else {
      setColor3("btn-success");
      setColor2("");
      setColor1("");
    }
  }

  return (
    <div>
      <div className="bg-black container" style={{ height: 150, width: 5 }}></div>
      <div
        className="text-center d-flex flex-column bg-black container rounded  "
        style={{ height: 230, width: 90 }}
      >
        <div>
          <button
            className={"btn rounded-circle p-1 border-danger my-2 " + color1}
            style={{ height: 60, width: 60 }}
            onClick={encenderRojo}
          >
            
          </button>
        </div>

        <div>
          <button
            className={"btn rounded-circle p-1 border-warning my-2 " + color2}
            style={{ height: 60, width: 60 }}
            onClick={encenderAmarillo}
          >
            
          </button>
        </div>

        <div>
          <button
            className={"btn rounded-circle p-1 border-success my-2 " + color3}
            style={{ height: 60, width: 60 }}
            onClick={encenderVerde}
          >
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
