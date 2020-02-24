import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

type FormElem = React.FormEvent<HTMLFormElement>;
interface Todo {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: Todo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };
  const removeTodo = (i: number): void => {
    const newTodos: Todo[] = [...todos];
    let answer = newTodos.filter((item: Todo, index: number) => {
      if (index !== i) {
        return item;
      }
    });
    setTodos(answer);
  };
  return (
    <Fragment>
      <h1>To do List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((item: Todo, index: number) => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: item.complete ? "line-through" : "" }}
              >
                {item.text}
              </div>
              <button type="button" onClick={() => completeTodo(index)}>
                {item.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
