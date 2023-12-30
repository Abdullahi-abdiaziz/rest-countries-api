import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import data from "./data.json";
import Navbar from "./Navbar";

const DetailedCard = () => {
  const [country, setCountries] = useState([]);
  const { countryName } = useParams();
  const history = createBrowserHistory();

  const fetchData = async () => {
    const country = data.find((c) => c.name === countryName);
    setCountries(country);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!country) {
    return <div>Country not found</div>;
  }

  const handleGoBack = () => {
    history.back(); // Go back to the previous page
  };

  const {
    name,
    population,
    region,
    subRegion,
    capital,
    flag,
    nativeName,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const currencyName =
    currencies && currencies.length > 0
      ? currencies[0].name
      : "Unknown Currency";

  const languageList =
    languages && languages.length > 0 ? languages[0].name : "Unknown Language";

  const bordersList =
    borders && borders.length > 0 ? (
      borders.map((border) => {
        return (
          <span className="border" key={border}>
            {border}
          </span>
        );
      })
    ) : (
      <span>No Borders</span>
    );

  return (
    <div>
      <Navbar />
      <div className="btn__back" onClick={handleGoBack}>
        <span className="icon-arrow-left"></span>
        <button>back</button>
      </div>
      <div className="card__detailed" key={name}>
        <div className="card__flag">
          <img src={flag} alt={name} />
        </div>
        <div className="card__info">
          <div className="info">
            <div className="base__info">
              <h4>{name}</h4>
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>s{subRegion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="more__info">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currency: <span>{currencyName}</span>
              </p>
              <p>
                Languages: <span>{languageList}</span>
              </p>
            </div>
          </div>
          <div className="borders">
            <p>
              Borders : <span>{bordersList}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
