import { useHistory } from "react-router-dom";

const projectListName = [
  {
    id: 1,
    name: "Todos",
    link: "todos",
  },
  {
    id: 2,
    name: "Covid-Tracker",
    link: "covid-tracker",
  },
];

const Sidebar = () => {
  const history = useHistory();
  const routeHandler = (link) => {
    history.push(`/${link}`);
  };
  return (
    <div className="sticky top-24 w-1/4 sidebar-h h-full">
      <h1 className="font-bold mb-2 text-xl">Examples List</h1>
      {/*projects example list  */}
      <div className="w-full flex flex-col">
        {projectListName.map(({ id, name, link }) => (
          <div
            onClick={() => routeHandler(link)}
            key={id}
            className="text-gray-500 pr-3 y-3 font-semibold 
            cursor-pointer rounded-sm hover:bg-gray-100"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
