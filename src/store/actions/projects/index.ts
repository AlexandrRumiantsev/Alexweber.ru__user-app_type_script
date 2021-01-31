import { useDispatch } from "react-redux";
//import { axios } from "axios";
const axios = require('axios');

//const dispatch = useDispatch();

export const getProjects  = () => (dispatch, _getState, api) => (
	axios.get('http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_all')
	.then(({data}) => dispatch({
			type: "GetProjects",
			payload: data
	}))
		.catch(function (error) {
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

