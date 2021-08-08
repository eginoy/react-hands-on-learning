import fetch from 'node-fetch';
import {getFakeMembers} from './api.js';
const randomuserApiUrl = "https://api.randomuser.me/?nat=US&results=1";

// Promise
// console.log(fetch(randomuserApiUrl)
// .then(res => res.json())
// .then(json => json.results)
// .then(console.log)
// .catch(console.error)
// );

// Async/Await
const getFakePerson = async apiUrl => {
    try{
        const res = await fetch(apiUrl);
        const json = await res.json();
        return json.results;
    }catch(error){
        return error;
    }
}

// console.log(await getFakePerson(randomuserApiUrl));

// use then/catch method
getFakeMembers(5)
.then(members => console.log(members))
.catch(error => console.error(error));

// use then/catch
async function testGetFakeMembers(count){
    try{
        const members = await getFakeMembers(count);
        console.log(members);
    }catch(error){
        console.error(error);
    }
};

testGetFakeMembers(5);