const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


const daysBetween = function(time) {
  const nowDate = new Date(Math.round((new Date()).getTime() / 1000)*1000);
  const thenDate = new Date(time);

  var diff =(nowDate.getTime() - thenDate.getTime()) / (1000*60 * 60 * 24);
  return Math.abs(Math.round(diff));
 }
;