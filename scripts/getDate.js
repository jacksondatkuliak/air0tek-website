function displayDate() {
  var refresh = 1000;
  mytime=setTimeout('getDate()', refresh);
}

function getDate() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
  document.getElementById("datetime2").innerHTML = dt.toLocaleTimeString();
  displayDate();
}
