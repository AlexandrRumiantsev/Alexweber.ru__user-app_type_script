import { useDispatch } from "react-redux";
//import { axios } from "axios";
const axios = require('axios');

//const dispatch = useDispatch();

export const getPapers  = () => (dispatch, _getState, api) => (


axios.get('http://api.alexweber.ru/wp-json/wp/v2/posts')
   .then(({data}) => {
   		return data;
	})
	.then((data) => {
		let newArray = [];
		data.map((elem) => {
			axios.get(elem['_links']['wp:featuredmedia'][0]['href']).then((imgData) => {
				elem.source_url = imgData['data']['source_url'];
			})
			newArray.push(elem);
		})
	
		dispatch({
			type: "GetPapers",
			payload: newArray
		})
	})
	.catch(function (error) {
    console.log(error);
  })
)


export const getPaper  = (id) => (dispatch, _getState, api) => (


	axios.get(`http://api.alexweber.ru/wp-json/wp/v2/posts/${id}`)
	   .then(({data}) => {
			   return data;
		})
		.then((data) => {
			axios.get(data['_links']['wp:featuredmedia'][0]['href']).then((imgData) => {
				data.source_url = imgData['data']['source_url'];
			})
			dispatch({
				type: "GetPaper",
				payload: data
			})
		})
		.catch(function (error) {
			console.log(error);
	  	})
	)
