const prod = process.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://geocar1.herokuapp.com/"
    : "http://localhost:300",
  "process.env.NAMESPACE": "https://geocar1.herokuapp.com",
};
