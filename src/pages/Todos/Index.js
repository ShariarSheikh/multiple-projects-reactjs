import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const Index = () => {
  const [storedTodo, setStoredTodo] = useState([]);
  const [isEdit, setIsEdit] = useState({ open: false, todoId: undefined });

  //...delete todo
  const deleteHandler = (id) => {
    const newTodo = storedTodo.filter((todo) => todo.id !== id);
    setStoredTodo(newTodo);
  };
  //...
  const editTodo = (id) => {
    setIsEdit({
      open: true,
      todoId: id,
    });
  };

  return (
    <section className="relative min-h-screen">
      {/* todo container */}
      <div className="flex-full mt-10 flex flex-col items-center justify-center">
        <div
          className="w-full md:w-2/4 lg:w-2/5 flex justify-between items-center
         rounded-lg border border-gray-500 py-3 px-2"
        >
          {/* todo form  */}
          <TodoForm
            storedTodo={storedTodo}
            setStoredTodo={setStoredTodo}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
        {/* todo list container */}
        <TodoList
          storedTodo={storedTodo}
          deleteHandler={deleteHandler}
          editTodo={editTodo}
        />
      </div>
    </section>
  );
};

export default Index;
