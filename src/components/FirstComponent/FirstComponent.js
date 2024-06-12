import { useNavigate } from "react-router-dom";
import ChildComponent from "./ChildComponent/ChildComponent";
import "./FirstComponent.css";

function FirstComponent() {

  // hooks functions...
  const navigate  = useNavigate();

  function handlerFunction() {
    // alert("Submit is called");
    navigate("/aboutUs");
  }

  function handlerNewButon() {
    alert("New Button is called");
  }

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

      <ChildComponent />
    </>
  );
}

export default FirstComponent;
