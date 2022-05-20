
var decimalValue = document.getElementById('decimal');
var binaryValue = document.getElementById('binary');
var octalValue = document.getElementById('octal');
var hexaValue = document.getElementById('hexa');

//==========================Decimal -> Binary ============================
function decimalToBinary() {
    var val = decimalValue.value;
    var result = "";
    while (val > 0) {
        var y = val % 2;
        result = y + result;
        val = Math.floor(val / 2);
    }
    binaryValue.value = result;
    //console.log(result);
}



//========================= Decimal -> Octal ==========================
function decimalToOctal() {
    var val = decimalValue.value;
    var result = "";
    while (val > 0) {
        var y = val % 8;
        result = y + result;
        val = Math.floor(val / 8);
    }
    octalValue.value = result;
    //console.log(result);
}

//=============================Decimal -> Hexadecimal ==========================
function decimalToHexa() {
    var val = decimalValue.value;
    var result = "";
    var arr = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
    while (val > 0) {
        var y = val % 16;
        if (y > 9) {
            result = arr[y] + result;
        }
        else {
            result = y + result;
        }
        val = Math.floor(val / 16);
    }
    hexaValue.value = result;
}

//===================================

function decimalConvert() {
    decimalToBinary();
    decimalToOctal();
    decimalToHexa();
};

function Reset() {
    binaryValue.value = "";
    octalValue.value = "";
    decimalValue.value = "";
    hexaValue.value = "";
};
