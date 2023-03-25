const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// require("dotenv").config();

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.MONGODB_USERNAME,
        mongodb_password: process.env.MONGODB_PASSWORD,
        mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
        mongodb_database: process.env.MONGODB_DATABASE,
      },
    };
  }
  return {
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
      mongodb_database: process.env.MONGODB_DATABASE,
    },
  };
};

// module.exports = {
//   env: {
//     mongodb_username: process.env.MONGODB_USERNAME,
//     mongodb_password: process.env.MONGODB_PASSWORD,
//     mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
//     mongodb_database: process.env.MONGODB_DATABASE,
//   },
// };
