import { useNavigate } from "react-router-dom";
import ChildComponent from "./ChildComponent/ChildComponent";
import "./FirstComponent.css";
import { useCallback, useState } from "react";
import axios from "axios";

function FirstComponent() {
  // hooks functions...
  const navigate = useNavigate();
  const[fact,setFact] = useState();

  function handlerFunction() {
    // alert("Submit is called");
    navigate("/aboutUs");
  }

  const handlerNewButon = useCallback(async () => {
    // alert("New Button is called");
    console.log("New button clicked");

    await axios
      .get(`https://catfact.ninja/fact`)
      .then((res) => {
        console.log("response received - ", res);
        setFact(res.data.fact);
      })
      .catch((err) => {
        console.log("Error occurred - ", err);
      });

      console.log("Out of API");
  }, []);

  return (
    <>
      <div className="first">
        <h1> Hello This is React</h1>
        <button type="submit" onClick={handlerFunction}>
          Submit
        </button>
        <button type="submit" onClick={handlerNewButon}>
          New Button
        </button>
      </div>

      <ChildComponent fact={fact}/>
    </>
  );
}

export default FirstComponent;
