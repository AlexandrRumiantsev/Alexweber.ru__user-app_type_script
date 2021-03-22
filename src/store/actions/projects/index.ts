const axios = require('axios');

export const getProjects  = () => (dispatch, _getState, api) => (
	axios.get('http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_all')
	.then(({data}) => dispatch({
			type: "GetProjects",
			payload: data
	})).then(() => {
		
	}).catch(function (error) {
		console.log(error);
	}) 
)

export const getProject  = (id) => (dispatch, _getState, api) => (
	axios.get(`http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_item?id=${id}`)
	.then(({data}) => {
		dispatch({
				type: "GetProject",
				payload: data
		})
	})
		.catch(function (error) {
		console.log(error);
	}) 
)

