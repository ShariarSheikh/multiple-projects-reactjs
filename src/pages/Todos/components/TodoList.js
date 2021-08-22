import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const TodoList = ({ storedTodo, deleteHandler,editTodo }) => {
  return (
    <div className="w-full md:w-2/4 lg:w-2/5 mt-6 flex justify-center flex-col">
      <h2 className="text-gray-500 font-semibold mb-5">Todo Container</h2>

      <div className="flex flex-col m-auto w-full">
        {storedTodo &&
          storedTodo.map(({ name, feedback, id }) => (
            <div
              key={id}
              className="w-full flex flex-row justify-between
               mb-5 border border-gray-600 rounded-lg px-3 h-auto
              overflow-hidden py-2"
            >
              <div>
                <p className="text-xl font-semibold text-gray-400">
                  Name: {name}
                </p>
                <p className="pb-2 text-gray-400">Feedback: {feedback}</p>
              </div>
              {/* todo icons */}
              <div>
                <FiEdit
                  className="mb-5 cursor-pointer text-green-500"
                  onClick={() => editTodo(id)}
                />
                <AiOutlineDelete
                  className=" cursor-pointer text-red-500"
                  onClick={() => deleteHandler(id)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
