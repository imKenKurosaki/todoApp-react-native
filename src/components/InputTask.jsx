import { memo, useCallback, useContext, useRef, useState } from "react";
import { TodosContext } from "./context";
import Todo from "./Todo";

const InputTask = memo(function InputTask() {
    const [todo, setTodo] = useState("");
    const { todos, setTodos } = useContext(TodosContext)
    const refId = useRef(0);

    function addTodo() {
        refId.current = todos.length;
        setTodos([...todos, { id: refId.current, todo, done: false }]);

        localStorage.setItem("todos", JSON.stringify([...todos, { id: refId.current, todo, done: false }]));
        refId.current++;
    }

    const deleteTodo = useCallback((id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)

        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }, [todos]);


    const doneTodo = useCallback((id) => {
        const newTodos = todos.filter((todo) => {
            if (todo.id === id) {
                todo.done = true
            }
            return todo;
        })
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }, [todos])

    return <div className="flex justify-center">
        <div className="w-80 flex flex-col gap-5">
            <div>
                <label>Task</label>
                <div className="flex gap-2">
                    <input type="text" placeholder="Input a task" onChange={(e) => setTodo(e.target.value)} className="p-3 border rounded-md border-black" />
                    <div className="grid content-center">
                        <button onClick={() => addTodo()} className="border rounded-md bg-lime-600 text-sm font-light py-2 px-[0.2rem]">Add Task</button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-4">
                {todos.map((todo) => {
                    return <div key={todo.id}>
                        <Todo todo={todo} id={todo.id} deleteFn={deleteTodo} doneFn={doneTodo} />
                    </div>
                })}
            </div>
        </div>
    </div>
});

export default InputTask;