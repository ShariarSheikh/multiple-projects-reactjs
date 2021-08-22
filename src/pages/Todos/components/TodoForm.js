import { useEffect, useState } from "react";

const TodoForm = ({ storedTodo, setStoredTodo, isEdit, setIsEdit }) => {
  const [nameInput, setNameInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  //edit
  useEffect(() => {
    if (isEdit.open) {
      const findTodo = storedTodo.filter((todo) => todo.id === isEdit.todoId);
      setNameInput(findTodo[0].name);
      setFeedback(findTodo[0].feedback);
    }
  }, [isEdit]);

  // todo creator function
  const addHandler = () => {
    if (!nameInput) {
      setError("Name input is MT");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    if (!feedback) {
      setError("Feedback is MT");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    if (nameInput && feedback) {
      const todoList = {
        name: nameInput,
        feedback: feedback,
        id: Math.floor(Math.random() * 1000),
      };
      setStoredTodo([...storedTodo, todoList]);
      setNameInput("");
      setFeedback("");
    }
  };

  //..update edit
  const updateEdit = () => {
    if (!nameInput) {
      setError("Name input is MT");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    if (!feedback) {
      setError("Feedback is MT");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    if (nameInput && feedback) {
      const createNewTodo = storedTodo.filter(
        (todo) => todo.id !== isEdit.todoId
      );

      const todoList = {
        name: nameInput,
        feedback: feedback,
        id: isEdit.todoId,
      };

      setStoredTodo([...createNewTodo, todoList]);
      setNameInput("");
      setFeedback("");
      setIsEdit({ open: false });
    }
  };
  //..cancel edit
  const cancelEdit = () => {
    setIsEdit({ open: false });
    setNameInput("");
    setFeedback("");
  };

  return (
    <div className="w-full relative">
      <div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="border-b border-gray-500 w-full mb-3 pb-2 text-xl bg-transparent text-gray-300 outline-none py-3"
        />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="border-b border-gray-500 w-full mb-3 pb-2 text-xl bg-transparent text-gray-300 outline-none py-3"
          placeholder="Give some feedback"
        ></textarea>
      </div>

      <div className="flex justify-end items-center pt-3 pb-2 px-2">
        {isEdit.open && (
          <>
            <button
              onClick={cancelEdit}
              className="py-2 px-3 bg-red-500 hover:bg-red-600 mr-3  text-white cursor-pointer rounded-md "
            >
              Cancel
            </button>
            <button
              className="py-2 px-3 bg-green-500 hover:bg-green-600  text-white cursor-pointer rounded-md"
              onClick={updateEdit}
            >
              Update
            </button>
          </>
        )}

        {!isEdit.open && (
          <button
            className="py-2 px-3 bg-green-500 hover:bg-green-600  text-white cursor-pointer rounded-md"
            onClick={() => addHandler()}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
