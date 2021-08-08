import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";

const Todos = () => {
  return (
    <section className="relative">
      <ProjectHeader projectName={"Todos"} />
      {/* todos container */}
      <div className="mt-10 max-w-xl pl-10 flex flex-col md:flex-row">
        {/* todo create and delete header  */}
        <div className="w-full flex justify-between items-center rounded-lg border border-gray-100 py-3 px-2">
            <div>delete</div>
            <div>

            </div>
        </div>
        {/* todos list container */}
        <div>list container</div>
      </div>
    </section>
  );
};

export default Todos;
