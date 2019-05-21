
const contentful = require("contentful");

export default contentful.createClient({
  space: "gshqhxabsojx",
  accessToken: "9XX06WB5-HAyFRqvWzUpzta09Tet5Fvce53IPH8t0Qc"
//   space: process.env.REACT_APP_API_SPACE,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN
});