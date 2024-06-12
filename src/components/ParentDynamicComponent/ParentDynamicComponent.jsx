import { useState } from "react";
import DynamicComponent from "../DynamicComponent/DynamicComponent";

export function ParentDynamicComponent(props) {
  const { id } = props;
  const [title, setTitle] = useState("Title 123");

  /*
  function handleOnChange(ev) {
    if (ev.target.value === "") {
      console.log("In if ");
      setTitle("Title 123");
      return;
    }

    console.log("Inside onChange - ", ev.target.value);
    setTitle(ev.target.value);
  }

  */

  function handleOnClick(ev) {
    ev.preventDefault(); //to avoid multiple renders

    const titleText = document.getElementById(id).value;

    console.log("Title text - ", titleText);

    setTitle(titleText);
  }

  /*
  const handleOnClick = useCallback((ev) => {
    ev.preventDefault(); //to avoid multiple renders

    const titleText = document.getElementById("title").value;

    console.log("Title text - ", titleText);

    setTitle(titleText);
  },[setTitle]);
 */
  return (
    <>
      <form>
        <label> Enter Title </label>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          id={id}
          // onChange={handleOnChange}
        />

        <button type="submit" title="Submit" onClick={handleOnClick}>
          Submit
        </button>
      </form>
      <DynamicComponent titleValue={title} textValue="Test description" />
    </>
  );
}
