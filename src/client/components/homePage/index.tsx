import * as React from "react";
import styles from "./styles.scss";
import Map from "../map";
import {
  getPrefectures,
  getPrefecturePopulationByIsoCode
} from "../../services/prefecturePopulationService";
import { Prefecture, PrefecturePopulation } from "../../types";

const HomePage: React.SFC = () => {
  const ageGroups = ["Below 20", "20 - 40", "40 - 60", "Above 60"];

  const [prefectures, setPrefectures] = React.useState([]);
  const [selectedPrefecture, setSelectedPrefecture] = React.useState({
    iso: ""
  });
  const [prefecturePopulations, setPrefecturePopulations] = React.useState([]);

  React.useEffect(function getInitialState() {
    (async function() {
      const prefectures: Prefecture[] = await getPrefectures();
      const selectedPrefecture: Prefecture = prefectures[0];
      const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
        selectedPrefecture.iso
      );

      setPrefectures(prefectures);
      setSelectedPrefecture(selectedPrefecture);
      setPrefecturePopulations(prefecturePopulations);
    })();
  }, []);

  async function updateSelectedPrefecture(selectedPrefecture) {
    const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
      selectedPrefecture.iso
    );

    setSelectedPrefecture(selectedPrefecture);
    setPrefecturePopulations(prefecturePopulations);
  }

  function abbreviateNumber(num: number) {
    if (num >= 1000000) {
      const numStr: string = num.toString();
      return `${numStr.slice(0, numStr.length - 6)}BLN`;
    }
    if (num >= 1000000) {
      const numStr: string = num.toString();
      return `${numStr.slice(0, numStr.length - 6)}MIL`;
    }

    if (num >= 1000000) {
      const numStr: string = num.toString();
      return `${numStr.slice(0, numStr.length - 3)}K`;
    }

    return Math.round(num).toString();
  }

  return (
    <div className={styles.container}>
      <div className={styles.col6}>
        <h2>Japan</h2>
        {process.browser ? <Map /> : <div />}
      </div>
      <div className={styles.col6}>
        <div>
          <h2>Prefecture</h2>
          <select
            value={selectedPrefecture.iso}
            onChange={updateSelectedPrefecture}
          >
            {prefectures.map(elem => (
              <option key={`prefecture_${elem.Id}`} value={elem.iso}>
                {elem.prefectureEn} ({elem.prefectureJp})
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2>Total Population</h2>
          <h2 className={styles.blueText}>
            {abbreviateNumber(
              prefecturePopulations.reduce(
                (elem, agg) => agg + elem.population,
                0
              )
            )}
          </h2>
        </div>
        <div>
          <div>
            <h3>Male</h3>
            <h3 className={styles.blueText}>
              {abbreviateNumber(
                prefecturePopulations
                  .filter(elem => elem.gender === "m")
                  .reduce((elem, agg) => agg + elem.population, 0)
              )}
            </h3>
          </div>
          <div>
            <h3>Female</h3>
            <h3 className={styles.blueText}>
              {abbreviateNumber(
                prefecturePopulations
                  .filter(elem => elem.gender === "f")
                  .reduce((elem, agg) => agg + elem.population, 0)
              )}
            </h3>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Male</th>
              <th>Female</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {ageGroups.map((elem, i) => (
              <tr key={`ageGroup${i}`}>
                <td>{elem}</td>
                <td>10M</td>
                <td>10M</td>
                <td>10M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
