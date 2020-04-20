const prod = process.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod ? "http://gcar.ge" : "http://localhost:3000",
  "process.env.NAMESPACE": "http://gcar.ge/",
};
