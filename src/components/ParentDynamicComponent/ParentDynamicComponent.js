import { useState } from "react";
import DynamicComponent from "../DynamicComponent/DynamicComponent";

export function ParentDynamicComponent() {
  const [title, setTitle] = useState("Title 123");

  function handleOnChange(ev) {
    if (ev.target.value === "") {
      console.log("In if ");
      setTitle("Title 123");
      return;
    }

    console.log("Inside onChange - ", ev.target.value);
    setTitle(ev.target.value);
  }

  return (
    <>
      <form>
        <label> Enter Title </label>
        <input
          type="text"
          placeholder="Enter title"
          onChange={handleOnChange}
        />
      </form>
      <DynamicComponent titleValue={title} textValue="Test description" />
    </>
  );
}
