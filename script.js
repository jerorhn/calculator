var history = document.getElementById('history');
var result = document.getElementById('result');

function getHistory() {
  return history.innerText;
}
function printHistory(num) {
  history.innerText = num;
}

printHistory(20);