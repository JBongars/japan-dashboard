import React, { useContext } from "react";
import styles from "./styles.scss";
import { HomeContext } from "../../context/homeData";
import { sumPopulation, abbreviateNumber } from "../../utils";

export default function PopulationTable() {
  const context: any = useContext(HomeContext);
  const { data } = context;
  const ageGroups = ["Below 20", "20-40", "40-60", "Above 60"];
  const { prefecturePopulations } = data;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Total Population</h2>
        <h2 className={styles.blueText}>
          {abbreviateNumber(sumPopulation(prefecturePopulations))}
        </h2>
      </div>
      <div>
        <div className={styles.col6}>
          <h3>Male</h3>
          <h3 className={styles.blueText}>
            {abbreviateNumber(
              sumPopulation(
                prefecturePopulations.filter(elem => elem.gender === "M")
              )
            )}
          </h3>
        </div>
        <div className={styles.col6}>
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
                    prefecturePopulations.filter(elem => elem.age === ageGroup)
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
