import { useEffect, useState } from "react";
import InputTask from "../components/InputTask"
import { TodosContext } from "../components/context";

export default function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || [])
    }, [])

    return <div>
        <h1>TODO List</h1>
        <TodosContext.Provider value={{ todos, setTodos }}>
            <InputTask todos={todos} setTodos={setTodos} />
        </TodosContext.Provider>
    </div>
}