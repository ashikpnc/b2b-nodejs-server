import db from '../database/db';
const { Op } = require('sequelize');

const retailerSortSearchPaginationCount = async (pageInfo, sort, option) => {
	return db['retailer'].findAndCountAll({
		where: option,
		include: [
			{
				model: db['user'],
				as: 'user',
			},
		],
		distinct: true,
		limit: pageInfo.limit,
		offset: pageInfo.skip,
		order: [sort],
	});
};

module.exports = {
	retailerSortSearchPaginationCount,
};
