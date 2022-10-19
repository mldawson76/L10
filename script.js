//let input = document.getElementById("input");
//let list = document.getElementById("list");

const axios = require("axios");
const URL = "https://crudcrud.com/api/cac8eed1da9d4325a64a90ed93684b50";
const updateTo = "Firewood-2 Bundles"


//axios.post(URL, {
//    marshmallows,
//}).then((res) => {
//    console.log(res);
//});

axios.get(URL).then((res) => {
    console.log(res);
});

//axios.put(URL, updateTo).then((res) => {
//    console.log(res);
//});

//axios.delete(URL, item5).then((res) => {
//    console.log(res);
//});


