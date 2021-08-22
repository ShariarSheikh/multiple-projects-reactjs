import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { codeShow } from "../../redux/openCode/openCode";

const ProjectHeader = ({ projectName }) => {
  const dispatch = useDispatch();

  return (
    <header className="relative w-full flex items-center justify-between bg-gray-100 h-10 rounded-sm">
      {/* left */}
      <p className="text-xl font-semibold pl-4">{projectName}</p>
      {/* right */}
      <div
        className="flex items-center space-x-3 pr-4 cursor-pointer"
        onClick={() => dispatch(codeShow())}
      >
        <p className="font-semibold">Source Code</p>
        <p>
          <MdKeyboardArrowDown className="h-6 text-green-600" />
        </p>
      </div>
    </header>
  );
};

export default ProjectHeader;
