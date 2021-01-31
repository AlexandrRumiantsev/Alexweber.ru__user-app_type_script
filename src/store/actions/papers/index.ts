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

/*  
 return  {
	type: "LoadProjects",
	payload: []
 };

console.log(getStore().dispatch);
getStore().dispatch({
	type: "LoadProjects",
	payload: []
 })

 
  const data = `{
	  "data": [
	    {
	    	"title":"Помыть посуду",
	    	"date": "20.01.2019"
	    },
	    {
	    	"title":"Выгулять собаку",
	    	"date": "10.01.2019"
	    },
	    {
	    	"title":"Покормить кота",
	    	"date":  "30.01.2019"
	    }
	  ]
	}`
	*/
    
)
