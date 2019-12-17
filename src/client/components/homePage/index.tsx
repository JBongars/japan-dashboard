import React from "react";
import styles from "./styles.scss";
import Map from "../map";
import PopulationTable from "../PopulationTable";
import Footer from "../Footer";

const HomePage = (): React.ComponentElement<null, null> => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div>
          <div className={styles.col6}>
            <h2>Japan</h2>
            <Map />
          </div>
          <div className={styles.col6}>
            <PopulationTable />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
