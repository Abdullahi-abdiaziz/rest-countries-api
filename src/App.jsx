import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import "./app.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Select from "react-select";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (selectedOption) => {
    setSelected(selectedOption);
    console.log(selectedOption.value);
    const filteredCountries = allCountries.filter(
      (country) => country.region === selectedOption.value
    );
    setCountries(filteredCountries.slice(0, 8));
  };

  const fetchData = async () => {
    setCountries(data.slice(0, 8));
    setAllCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    let filteredCountries;
    selected !== null
      ? (filteredCountries = allCountries.filter(
          (country) =>
            country.region === selected.value &&
            country.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
        ))
      : (filteredCountries = allCountries.filter((country) =>
          country.name.toLowerCase().includes(event.target.value.toLowerCase())
        ));
    setCountries(filteredCountries.slice(0, 8));
  };

  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Asia", label: "Asia" },
    { value: "Americas", label: "Americas" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <div>
      <Navbar />
      <section>
        <div className="filter">
          <span className="icon-search"></span>
          <input
            type="text"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={handleSearch}
            className="input"
          />
          <Select
            placeholder="Select By Region"
            options={options}
            onChange={handleSelect}
            autoFocus={true}
          />
        </div>
        <div className="countries">
          {countries.map((country) => (
            <Link key={country.flag} to={`/${country.name}`}>
              <Card country={country} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
App.js;
