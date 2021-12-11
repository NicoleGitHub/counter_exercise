
function plus(id) {
    if(id == 1) {
        document.getElementById('numberOne').innerHTML++;
    }
    else {
        document.getElementById('numberTwo').innerHTML++;
    }
    sum();
}

function minus(id) {
    if(id == 1) {
        document.getElementById('numberOne').innerHTML--;
    }
    else {
        document.getElementById('numberTwo').innerHTML--;
    }
    sum();

}

function sum() {
    document.getElementById('sum').innerHTML = Number(document.getElementById('numberOne').innerHTML) +  Number(document.getElementById('numberTwo').innerHTML);
  }
