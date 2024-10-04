document.getElementById('bin-con').addEventListener('click', function() {
    const decimalInput = document.getElementById('decimal').value;
    const binaryResult = Number(decimalInput).toString(2);
    document.getElementById('binary').value = binaryResult;
});

document.getElementById('oct-con').addEventListener('click', function() {
    const binaryInput = document.getElementById('binary').value;
    const decimalFromBinary = parseInt(binaryInput, 2);
    const octalResult = decimalFromBinary.toString(8);
    document.getElementById('octalNo').value = octalResult;
});

document.getElementById('dec-con').addEventListener('click', function() {
    const octalInput = document.getElementById('octalNo').value;
    const decimalResult = parseInt(octalInput, 8);
    document.getElementById('decNo').value = decimalResult;
});

document.getElementById('hex-con').addEventListener('click', function() {
    const decimalInput = document.getElementById('decNo').value;
    const hexResult = Number(decimalInput).toString(16).toUpperCase();
    document.getElementById('hexNo').value = hexResult;
});
function reset() {
    document.getElementById('decimal').value = '';
    document.getElementById('binary').value = '';
    document.getElementById('octalNo').value = '';
    document.getElementById('decNo').value = '';
    document.getElementById('hexNo').value = '';
}
