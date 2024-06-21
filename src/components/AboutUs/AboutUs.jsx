import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Task1 } from "../Task1/Task1";

export function AboutUs() {
  const [task1, setTask1] = useState();
  const [task2, setTask2] = useState();
  const [task3, setTask3] = useState();
  const [todoItem, setTodoItem] = useState([]);

  // hooks functions...
  const navigate = useNavigate();

  const todoItems = useMemo(() => {
    if (todoItem) {
      console.log("In useMemo - ", todoItem);

      return todoItem;
    }

    return [];
  }, [todoItem]);

  const handleToDoSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      const todoText = document.getElementById("todoItem").value;
      const deadline = document.getElementById("deadline").value;
      console.log("Todo Text - ", todoText);
      if (todoText.length > 0) {
        setTodoItem([...todoItem, {todoText, deadline}]);
      }
    },
    [setTodoItem, todoItem]
  );

  function handleBackButton() {
    navigate("/");
    console.log("In handle back");
    // return <><h1>Back button</h1></>
  }

  const handleTask1 = useCallback(() => {
    setTask1(true);
    setTask2(false);
    setTask3(false);
  }, [setTask1, setTask2, setTask3]);

  const handleTask2 = useCallback(() => {
    setTask1(false);
    setTask2(true);
    setTask3(false);
  }, [setTask1, setTask2, setTask3]);

  const handleTask3 = useCallback(() => {
    setTask1(false);
    setTask2(false);
    setTask3(true);
  }, [setTask1, setTask2, setTask3]);

  function renderContent() {
    if (task1) {
      return <Task1 todos={todoItems ?? []} />;
    }

    if (task2) {
      return (
        <>
          <h1> Task 2</h1>
        </>
      );
    }

    if (task3) {
      return (
        <>
          <h1> Task 3</h1>
        </>
      );
    }

    return <></>;
  }

  return (
    <>
      <h1> About Us</h1>

      <br />
      <br />
      <form>
        <label> Enter Item </label>
        <input
          type="text"
          placeholder="Enter Item"
          name="item"
          id={"todoItem"}
        />

        <label> Deadline </label>
        <input
          type="text"
          placeholder="Deadline"
          name="Deadline"
          id={"deadline"}
        />

        <button type="submit" title="Submit" onClick={handleToDoSubmit}>
          Submit
        </button>
      </form>
      <br />
      <button type="submit" onClick={handleBackButton}>
        Back
      </button>
      <br></br>
      <br />
      <button type="submit" onClick={handleTask1}>
        Task 1
      </button>
      <button type="submit" onClick={handleTask2}>
        Task 2
      </button>
      <button type="submit" onClick={handleTask3}>
        Task 3
      </button>

      {renderContent()}
    </>
  );
}
