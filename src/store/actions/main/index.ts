const axios = require('axios');


export const getMain  = () => (dispatch, _getState, api) => (


axios.get('http://api.alexweber.ru/wp-json/wp/v2/pages/59')
   .then(({data}) => dispatch({
		type: "GetMain",
		payload: data
   }))
	.catch(function (error) {
   
    console.log(error);
  })

    
)
