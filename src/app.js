import "./style.scss";
import config from "./config";


const api_response_1 = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${config.channel_id_1}&key=${config.api_key}`;
const api_response_2 = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${config.channel_id_2}&key=${config.api_key}`;

// const idSearch = `https://www.googleapis.com/youtube/v3/channels?key=${key}&forUsername=tseries&part=id`;

const container = document.querySelector(".container");

const col_1 = document.querySelector(".col-1");
const col_2 = document.querySelector(".col-2");

const odometer_1 = document.getElementById("odometer_1");
const odometer_2 = document.getElementById("odometer_2");
let subCount_1 = 0;
let subCount_2 = 0;

const urls = [api_response_1, api_response_2];

// TODO  : add count functionality to any youtube channels with search input.
/*
fetch(idSearch)
  .then(blob => blob.json())
  .then(data => console.log(data.items[0].id));
*/

setInterval(() => {
  requestCall_1(api_response_1);
  requestCall_2(api_response_2);
}, 2000);

const requestCall_1 = apiCall =>
  fetch(apiCall)
    .then(blob => blob.json())
    .then(data => {
      subCount_1 = data.items[0].statistics.subscriberCount;
      odometer_1.innerHTML = subCount_1;
      col_1.appendChild(odometer_1);
    });

const requestCall_2 = apiCall =>
  fetch(apiCall)
    .then(blob => blob.json())
    .then(data => {
      subCount_2 = data.items[0].statistics.subscriberCount;
      odometer_2.innerHTML = subCount_2;
      col_2.appendChild(odometer_2);
    });


//night mode function

const body = document.getElementById('toggle_id');
const btn = document.getElementById('input');

function nightMode() {
  body.classList.toggle('toggle-switch');
}
btn.addEventListener('click', nightMode);