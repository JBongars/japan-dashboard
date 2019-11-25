import * as React from "react";
import styles from "./styles.scss";
import Map from "../map";

const HomePage: React.SFC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col6}>
        <h2>Japan</h2>
        {process.browser ? <Map /> : <div />}
      </div>
      <div className={styles.col6}>
        <div>
          <h2>Total Population</h2>
          <h2 className={styles.blueText}>251M</h2>
        </div>
        <div>
          <div>
            <h3>Male</h3>
            <h3 className={styles.blueText}>128M</h3>
          </div>
          <div>
            <h3>Female</h3>
            <h3 className={styles.blueText}>128M</h3>
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
            <tr>
              <td>Below 20</td>
              <td>10M</td>
              <td>10M</td>
              <td>10M</td>
            </tr>
            <tr>
              <td>20 - 40</td>
              <td>10M</td>
              <td>10M</td>
              <td>10M</td>
            </tr>
            <tr>
              <td>40 - 60</td>
              <td>10M</td>
              <td>10M</td>
              <td>10M</td>
            </tr>
            <tr>
              <td>Above 60</td>
              <td>10M</td>
              <td>10M</td>
              <td>10M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
