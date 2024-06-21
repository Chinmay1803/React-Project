import { useEffect, useState } from "react";

export function Task1(props) {
  const { todos } = props;

  const [count, setCount] = useState(0);
  // Todo = Array<string>

  useEffect(() => {
    if(todos){
        setCount(todos.length);
    }
  }, [todos, setCount]);


  return (
    <>
      <h1>Task 1</h1>
      {todos.map((todo) => {
        return (
          <>
            <p>
              {todo.todoText}  {todo.deadline}
              <br />
            </p>
          </>
        );
      })}


      <h4> There are {count} tasks</h4>
    </>
  );
}
