const LiveCases = ({ countries }) => {
  return (
    <div className="w-full h-full px-4 py-3 live-case-component lg:px-0">
      <h1 className="text-2xl font-semibold text-gray-100">
        Live Cases by Country
      </h1>
      {/* table */}
      <div className="max-h-96 overflow-y-scroll md:overflow-y-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-3 py-3  text-left leading-4 text-gray-400 tracking-wider">
                Location
              </th>
              <th className="px-3 py-3 text-left text-sm leading-4 text-gray-400 tracking-wider">
                Total Cases
              </th>
              <th className="px-3 py-3  text-left text-sm leading-4 text-gray-400 tracking-wider">
                Today Cases
              </th>
              <th className="px-3 py-3  text-left text-sm leading-4 text-gray-400 tracking-wider">
                Cases per 1M people
              </th>
              <th className="px-3 py-3  text-left text-sm leading-4 text-gray-400 tracking-wider">
                Deaths
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            {countries.map(
              ({
                name,
                flag,
                totalCases,
                todayCases,
                deaths,
                casesPerOneMillion,
              }) => (
                <tr className="border-t border-gray-500" key={name}>
                  <td className="px-6 py-4 whitespace-no-wrap ">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-3">
                        <div>
                          <img
                            className="w-8 h-7 object-contain "
                            src={flag}
                            alt="country flag"
                          />
                        </div>
                        <div className="text-sm  text-gray-400">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap ">
                    <div className="text-sm text-gray-400">{totalCases}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-gray-400  text-sm leading-5">
                    {todayCases}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap  text-gray-400  text-sm leading-5">
                    {casesPerOneMillion}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap  text-gray-400  text-sm leading-5">
                    {deaths}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveCases;
