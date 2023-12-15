const { Op } = require("sequelize");
import db from "../database/db";

const fetchReportsQuery = (model, condition, pageInfo) =>
  db[model].findAndCountAll({
    where: condition,
    include: [
      {
        model: db.order,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
  });

module.exports = { fetchReportsQuery };
