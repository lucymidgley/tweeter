const escape =  function(str) { //function to escape characters to revent malicious content affecting database
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str)); //create text node for input string
  return div.innerHTML;
};


const daysBetween = function(time) { //function to calculate the number of days between 2 dates given their UNIX timestamp
  const nowDate = new Date().getTime(); //date now in milliseconds since Unix Epoch
  let diff = (nowDate - time) / (1000 * 60 * 60 * 24); //calculate difference in days (divide difference by number of milliseconds in a day)
  return Math.abs(Math.round(diff)); //round this value to nearest day
};