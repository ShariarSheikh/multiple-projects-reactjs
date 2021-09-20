import { useEffect, useState } from "react";
import CovidMap from "./components/CovidMap";
import InfoBox from "./components/InfoBox";
import LiveCases from "./components/LiveCases";

const Index = () => {
  const [countriesListName, setCountriesListName] = useState([]);
  const [selectCountry, setSelectCountry] = useState("Worldwide");
  //.............................................................
  const [countryInfo, setCountryInfo] = useState({});
  //table list
  const [table, setTable] = useState([]);
  //country map
  const [mapCenter, setMapCenter] = useState({
    lat: 37.7577,
    lng: -122.4376,
  });
  const [mapCountries, setMapCountries] = useState([]);

  //on page reload call these api
  useEffect(() => {
    const fetchCountriesName = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          //collect countries name
          setCountriesListName(data);
          const tableList = data.map((country) => ({
            name: country.country,
            flag: country.countryInfo.flag,
            totalCases: country.cases,
            todayCases: country.todayCases,
            casesPerOneMillion: country.casesPerOneMillion,
            deaths: country.deaths,
          }));
          //collect countries data
          setTable(tableList);
          // map countries
          setMapCountries(data);
        });
    };
    fetchCountriesName();

    // worldwide cases take data when page reload
    //once reloaded and then onChangeCountry() called then worldwide cases data take from onChangeCountry()
    const worldwideCases = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((res) => res.json())
        .then((data) => {
          setCountryInfo(data);
        })
        .catch((err) => console.log(err));
    };
    worldwideCases();
  }, []);

  //if change country then call this api
  const onChangeCountry = async (e) => {
    const name = e.target.value;
    setSelectCountry((prevState) => name);
    const url =
      name === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${name}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <main className="relative w-full covid-bg min-h-screen">
        {/* map section */}
        <section className="map-h relative w-full bg-gray-900">
          {/* countries list */}
          <div className="absolute right-0 top-0 z-40">
            <select
              className="shadow-md px-5 py-4 outline-none bg-black text-gray-50"
              value={selectCountry}
              onChange={onChangeCountry}
            >
              <option value="Worldwide">Worldwide</option>
              {countriesListName?.map((country) => (
                <option value={country.countryInfo.iso2} key={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
          </div>

          <CovidMap countries={mapCountries} center={mapCenter}/>
        </section>
        {/* information section */}
        <div className="text-center text-2xl text-gray-100 font-semibold">
          {countryInfo.country}
        </div>
        <section className="relative w-full flex flex-col justify-center items-center mt-10">
          {/* info header */}
          <div className="flex flex-wrap justify-center flex-col md:flex-row">
            <InfoBox
              title="Coronavirus Cases"
              cases={countryInfo.todayCases}
              total={countryInfo.cases}
            />
            <InfoBox
              title="Recovered"
              cases={countryInfo.todayRecovered}
              total={countryInfo.recovered}
            />
            <InfoBox
              title="Deaths"
              cases={countryInfo.todayDeaths}
              total={countryInfo.deaths}
            />
          </div>
          {/* live cases component */}
          <div className="w-full md:w-auto md:overflow-x-hidden border border-gray-400 mt-10">
            <LiveCases countries={table} />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default Index;
