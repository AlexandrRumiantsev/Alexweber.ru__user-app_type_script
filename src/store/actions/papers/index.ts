const axios = require('axios');

export const getPapers = () => (dispatch, _getState, api) => (
	axios.get('http://api.alexweber.ru/wp-json/wp/v2/posts?_embed')
		.then(({ data }) => {
			dispatch({
				type: "GetPapers",
				payload: data
			})
		})
		.catch(function (error) {
			console.log(error);
		})
)


export const getPaper = (id) => (dispatch, _getState, api) => (
	axios.get(`http://api.alexweber.ru/wp-json/wp/v2/posts/${id}?_embed`)
		.then((response) => {
			dispatch({
				type: "GetPaper",
				payload: response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		})
)
