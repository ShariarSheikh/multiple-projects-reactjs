const ProjectHeader = ({ projectName }) => {
  return (
    <header className="w-full flex items-center justify-between bg-gray-100 h-10 px-3 rounded-sm">
      {/* left */}
      <p className="text-xl font-semibold">{projectName}</p>
      {/* right */}
      <div className="flex items-center space-x-3 cursor-pointer">
        <p className="font-semibold">Source Code</p>
      </div>
    </header>
  );
};

export default ProjectHeader;
