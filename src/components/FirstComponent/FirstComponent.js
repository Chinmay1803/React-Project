import ChildComponent from './ChildComponent/ChildComponent';
import './FirstComponent.css';

function FirstComponent() {

    function handlerFunction() {

        alert("Submit is called");
    }

    function handlerNewButon() {
        alert("New Button is called");
    }

    return <div className="first">
    <h1> Hello This is React</h1>
    <button type='submit' onClick={handlerFunction} > Submit </button>
    <button type='submit' onClick={handlerNewButon} > New Button </button>


    <ChildComponent />
    </div>
}

export default FirstComponent;

