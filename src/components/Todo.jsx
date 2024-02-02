import { memo } from "react";
import Button from "./Button";

const Todo = memo(function Todo({ todo, id, deleteFn, doneFn }) {
    return <div className="p-4 flex justify-between gap-6 shadow-md rounded-md">
        <div>
            <p className="text-[0.8rem] font-thin">Task</p>
            {todo.done ? <p className="line-through">{todo.todo}</p> : `${todo.todo}`}
        </div>
        <div className="flex gap-3">
            <Button id={id} callbackFn={doneFn} styles={"bg-green-600"}>Done</Button>
            <Button id={id} callbackFn={deleteFn} styles={"bg-rose-600"}>Delete</Button>
        </div>
    </div>
});

export default Todo;