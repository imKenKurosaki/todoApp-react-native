import { memo } from "react";

const Todo = memo(function Todo({ todo, id, deleteFn, doneFn }) {
    return <div className="border border-md p-4 flex justify-between gap-6">
        {todo}
        <div className="flex gap-3">
            <button onClick={() => doneFn(id)}>Done</button>
            <button onClick={() => deleteFn(id)}>Delete</button>
        </div>
    </div>
});

export default Todo;