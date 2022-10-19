//let input = document.getElementById("input");
//let list = document.getElementById("list");

const axios = require("axios");
const URL = "https://mockend.com/mldawson76/L10/todo";
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


