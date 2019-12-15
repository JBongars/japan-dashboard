import * as React from "react";
import styles from "./styles.scss";
import Map from "../map";
import {
  getPrefectures,
  getPrefecturePopulationByIsoCode
} from "../../services/prefecturePopulationService";
import { Prefecture, PrefecturePopulation } from "../../types";

const HomePage: React.SFC = () => {
  const ageGroups = ["Below 20", "20-40", "40-60", "Above 60"];

  const [prefectures, setPrefectures] = React.useState([]);
  const [selectedPrefecture, setSelectedPrefecture] = React.useState({
    iso: ""
  });
  const [prefecturePopulations, setPrefecturePopulations] = React.useState([]);

  React.useEffect(function getInitialState() {
    (async function getInitialStateInner() {
      const prefectures: Prefecture[] = await getPrefectures();
      const selectedPrefecture: Prefecture = prefectures[0];
      const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
        selectedPrefecture.iso
      );

      // console.log({ prefecturePopulations });

      setPrefectures(prefectures);
      setSelectedPrefecture(selectedPrefecture);
      setPrefecturePopulations(prefecturePopulations);
    })();
  }, []);

  async function updateSelectedPrefecture(e) {
    const selectedPrefectureIso = e.target.value;
    const prefecturePopulations: PrefecturePopulation[] = await getPrefecturePopulationByIsoCode(
      selectedPrefectureIso
    );

    setSelectedPrefecture(selectedPrefecture);
    setPrefecturePopulations(prefecturePopulations);
  }

  function abbreviateNumber(num: number): string | boolean {
    function helper(
      num: number,
      decimals: number,
      abbriviation: string,
      places = 2
    ): string {
      const multiplier = 10 ** places;
      const calculated = num / 10 ** decimals;
      const rounded = Math.ceil(calculated * multiplier) / multiplier;

      return `${rounded} ${abbriviation}`;
    }

    if (num >= 10 ** 9) {
      return helper(num, 9, "BLN");
    }
    if (num >= 10 ** 6) {
      return helper(num, 6, "MIL");
    }
    if (num >= 10 ** 3) {
      return helper(num, 3, "K");
    }
    return Math.round(num).toString();
  }

  const sumPopulation = (
    prefecturePopulations: PrefecturePopulation[]
  ): number =>
    prefecturePopulations
      .map((elem: PrefecturePopulation): string => elem.population)
      .reduce((a: number, elem: string): number => a + parseInt(elem, 10), 0);

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
              <option key={`prefecture_${elem.id}`} value={elem.iso}>
                {elem.prefectureEn} ({elem.prefectureJp})
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2>Total Population</h2>
          <h2 className={styles.blueText}>
            {abbreviateNumber(sumPopulation(prefecturePopulations))}
          </h2>
        </div>
        <div>
          <div>
            <h3>Male</h3>
            <h3 className={styles.blueText}>
              {abbreviateNumber(
                sumPopulation(
                  prefecturePopulations.filter(elem => elem.gender === "M")
                )
              )}
            </h3>
          </div>
          <div>
            <h3>Female</h3>
            <h3 className={styles.blueText}>
              {abbreviateNumber(
                sumPopulation(
                  prefecturePopulations.filter(elem => elem.gender === "F")
                )
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
            {ageGroups.map((ageGroup, i) => (
              <tr key={`ageGroup${i}`}>
                <td>{ageGroup}</td>
                <td>
                  {abbreviateNumber(
                    sumPopulation(
                      prefecturePopulations.filter(
                        elem => elem.gender === "M" && elem.age === ageGroup
                      )
                    )
                  )}
                </td>
                <td>
                  {abbreviateNumber(
                    sumPopulation(
                      prefecturePopulations.filter(
                        elem => elem.gender === "F" && elem.age === ageGroup
                      )
                    )
                  )}
                </td>
                <td>
                  {abbreviateNumber(
                    sumPopulation(
                      prefecturePopulations.filter(
                        elem => elem.age === ageGroup
                      )
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
