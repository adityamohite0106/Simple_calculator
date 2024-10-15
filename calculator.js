function appendValue(value) {
    document.getElementById('display').value += value;
}
function evalButton(value) {
    document.getElementById('display').value = eval(document.getElementById('display').value)
}
function ResetDisplay(value){
    document.getElementById('display').value=" ";
}
function deleteValue(value){
document.getElementById('display').value = document.getElementById('display').value.slice(0 , -1);

}