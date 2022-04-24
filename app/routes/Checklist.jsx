import { useLoaderData } from "@remix-run/react";
import { getTodos } from "~/todos";
import checklistStyle from "../styles/checklist.css";

export const loader = async () => {
  return getTodos();
};

export const links = () => {
  return [{ rel: "stylesheet", href: checklistStyle }];
};

export default function Checklist() {
  const todos = useLoaderData();

  return (
    <div className="wrapper">
      {todos.map((todo) => (
        <label key={todo.name}>
          <input
            type="checkbox"
            id={todo.name.replace(/ /g, "")}
            checked={todo.done}
            onChange={() => {}}
          />
          {todo.name}
        </label>
      ))}
    </div>
  );
}
