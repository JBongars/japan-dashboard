const config = {
  japanDashboardApi: {
    host: process.env.JAPAN_API_HOST || "http://localhost:8080/api",
    geoDataUrl: "/geodata/prefectures.json",
    geoGradientMax: 30000000
  }
};

export default config;
