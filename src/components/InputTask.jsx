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

    return <div>
        <input type="text" placeholder="Input a task" onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => addTodo()}>Add Task</button>

        <div className="w-80">
            {todos.map((todo) => {
                return <div key={todo.id}>
                    <Todo todo={todo.todo} id={todo.id} deleteFn={deleteTodo} doneFn={doneTodo} />
                </div>
            })}
        </div>
    </div>
});

export default InputTask;