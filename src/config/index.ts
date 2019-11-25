require("dotenv").config();

export interface Config {
  japanDashboardApi: {
    host: string;
  };
}

export const config = {
  japanDashboardApi: {
    host: process.env.JAPAN_DASHBOARD_API_URL || "https://localhost:5000"
  }
};

export default config;
