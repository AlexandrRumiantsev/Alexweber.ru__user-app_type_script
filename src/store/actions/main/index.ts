import { useDispatch } from "react-redux";
//import { axios } from "axios";
const axios = require('axios');

//const dispatch = useDispatch();

export const getMain  = () => (dispatch, _getState, api) => (


axios.get('http://api.alexweber.ru/wp-json/wp/v2/pages/59')
   .then(({data}) => dispatch({
		type: "GetMain",
		payload: data
   }))
	.catch(function (error) {
    // handle error
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
