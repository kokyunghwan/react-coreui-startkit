import axios from 'axios'

const server = 'https://jsonplaceholder.typicode.com/';

export const callApi = (url) => {

    // axios.get('https://a.4cdn.org/a/threads.json', {
    axios.get(server + url, {
    headers: {
	  'Access-Control-Allow-Origin': '*',
	},
	// proxy: {
	//   host: '104.236.174.88',
	//   port: 3128
	// }
	}).then(function (response) {
		const parseData = JSON.stringify(response);
		console.log('response is 2: ' + parseData.data);
	}).catch(function (error) {
		if (error.response) {
		  console.log(error.response.headers);
		} 
		else if (error.request) {
	      console.log(error.request);
		} 
		else {
		  console.log(error.message);
		}
	console.log(error.config);
});

}