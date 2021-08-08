import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

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
  const [sidebarSmall, setSidebarSmall] = useState();
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setSidebarSmall(true);
      }
      if (window.innerWidth > 1280) {
        setSidebarSmall(false);
      }
    };
    if (window.innerWidth <= 1280) {
      setSidebarSmall(true);
    }
    if (window.innerWidth > 1280) {
      setSidebarSmall(false);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const history = useHistory();
  const routeHandler = (link, name) => {
    const findName = projectListName.find((nm) => nm.name == name);
    if (findName) {
      setOpenSidebar(false);
    }
    history.push(`/${link}`);
  };
  return (
    <>
      <div
        className={`${
          sidebarSmall
            ? `fixed shadow pl-4 pt-3 ${
                openSidebar ? "inline-block" : " hidden"
              }`
            : "sticky"
        } bg-white z-50 top-24 w-1/4 sidebar-h h-full`}
      >
        <div className="font-bold mb-2 text-xl flex justify-between">
          <p> Examples List</p>
          {openSidebar && (
            <AiOutlineClose
              className="inline-block w-8 h-8 pr-3 cursor-pointer"
              onClick={() => setOpenSidebar((prevState) => !prevState)}
            />
          )}
        </div>
        {/*projects example list  */}
        <div className="w-full flex flex-col">
          {projectListName.map(({ id, name, link }) => (
            <div
              onClick={() => routeHandler(link, name)}
              key={id}
              className="text-gray-500 pr-3 y-3 font-semibold 
            cursor-pointer rounded-sm hover:bg-gray-100"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      {sidebarSmall && (
        <div
          className="pb-3 cursor-pointer"
          onClick={() => setOpenSidebar((prevState) => !prevState)}
        >
          <IoIosMenu className="inline-block w-8 h-8" />
        </div>
      )}
    </>
  );
};

export default Sidebar;
