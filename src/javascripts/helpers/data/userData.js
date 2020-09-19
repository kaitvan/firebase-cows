import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObject) => {
  axios.get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObject.uid}"`)
    .then((response) => {
      if (Object.values(response.data).length === 0) {
        // {
        //   image: 
        //   uid:
        //   displayName: 
        //   email:
        //   lastSignInTime: 
        // }
        // use axios.post
        // pass it the url 
        // pass it an object
      } else {
        console.warn('NOT EMPTY OBJECT');
      }
    });
};

export default { getUser };
