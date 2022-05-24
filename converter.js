
var decimalValue = document.getElementById('decimal');
var binaryValue = document.getElementById('binary');
var octalValue = document.getElementById('octal');
var hexaValue = document.getElementById('hexa');

//==========================Decimal -> Binary================================

function decimalToBinary() {
    var val = decimalValue.value;
    var result = "";

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
    }
    while (val > 0) {
        var y = val % 2;
        result = y + result;
        val = Math.floor(val / 2);
    }
    binaryValue.value = result;
}

//========================= Decimal -> Octal=================================

function decimalToOctal() {
    var val = decimalValue.value;
    var result = "";

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
    }
    while (val > 0) {
        var y = val % 8;
        result = y + result;
        val = Math.floor(val / 8);
    }
    octalValue.value = result;
}

//=============================Decimal -> Hexadecimal========================

function decimalToHexa() {
    var val = decimalValue.value;
    var result = "";
    var arr = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else { }
    }
    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
    }
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

//==============================Binary -> Decimal============================

function binaryToDecimal() {
    var val = binaryValue.value;
    var result = 0;
    var i = val.length - 1;
    var j = 0;

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else {
            for (let x of val) {
                if (x > 1) {
                    alert('Invalid Input!');
                    Reset();
                }
                else {
                    while (i > -1) {
                        var y = (Number(val[i])) * (2 ** [j]);
                        result += y;
                        i--;
                        j++;
                    }
                    decimalValue.value = result;
                }
            }
        }
    }

}


//===============================Binary -> Octal==============================

function binaryToOctal() {
    var val = binaryValue.value;
    var result = 0, finalResult = "";
    var i = val.length - 1;
    var j = 0;

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else {
            for (let x of val) {
                if (x > 1) {
                    alert('Invalid Input!');
                    Reset();
                }
                else {
                    while (i > -1) {
                        var y = (Number(val[i])) * (2 ** [j]);
                        result += y;
                        i--;
                        j++;
                    }

                    while (result > 0) {
                        var y = result % 8;
                        finalResult = y + finalResult;
                        result = Math.floor(result / 8);
                    }
                    octalValue.value = finalResult;
                }
            }
        }
    }


}

//=================================Binary -> Hexa============================

function binaryToHexa() {
    var val = binaryValue.value;
    var result = 0, finalResult = "";
    var i = val.length - 1;
    var j = 0;
    var arr = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else {
            for (let x of val) {
                if (x > 1) {
                    alert('Invalid Input!');
                    Reset();
                }
                else {
                    while (i > -1) {
                        var y = (Number(val[i])) * (2 ** [j]);
                        result += y;
                        i--;
                        j++;
                    }

                    while (result > 0) {
                        var y = result % 16;
                        if (y > 9) {
                            finalResult = arr[y] + finalResult;
                        }
                        else {
                            finalResult = y + finalResult;
                        }
                        result = Math.floor(result / 16);
                    }

                    hexaValue.value = finalResult;
                }
            }
        }
    }


}

//================================Octal -> Decimal==========================
function octalToDecimal() {
    var val = octalValue.value;
    var result = 0;
    var i = val.length - 1;
    var j = 0;

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else {
            for (let x of val) {
                if (x > 7) {
                    alert('Invalid Input!');
                    Reset();
                }
                else {
                    while (i > -1) {
                        var y = (Number(val[i])) * (8 ** [j]);
                        result += y;
                        i--;
                        j++;
                    }
                    decimalValue.value = result;
                }
            }
        }
    }


}

// =================================Octal -> Binary=============================

function octalToBinary() {
    var val = octalValue.value;
    var result = 0, finalResult = "";
    var i = val.length - 1;
    var j = 0;

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else {
            for (let x of val) {
                if (x > 7) {
                    alert('Invalid Input!');
                    Reset();
                }
                else {
                    while (i > -1) {
                        var y = (Number(val[i])) * (8 ** [j]);
                        result += y;
                        i--;
                        j++;
                    }

                    while (result > 0) {
                        var y = result % 2;
                        finalResult = y + finalResult;
                        result = Math.floor(result / 2);
                    }
                    binaryValue.value = finalResult;
                }
            }
        }
    }


}

//=================================Octal -> Hexa=============================

function octalToHexa() {
    var val = octalValue.value;
    var result = 0, finalResult = "";
    var i = val.length - 1;
    var j = 0;
    var arr = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

    for (let x of val) {
        if (isNaN(x) == true) {
            alert('Invalid Input: Input is not a Number!');
            Reset();
        }
        else {
            for (let x of val) {
                if (x > 7) {
                    alert('Invalid Input!');
                    Reset();
                }
                else {
                    while (i > -1) {
                        var y = (Number(val[i])) * (8 ** [j]);
                        result += y;
                        i--;
                        j++;
                    }

                    while (result > 0) {
                        var y = result % 16;
                        if (y > 9) {
                            finalResult = arr[y] + finalResult;
                        }
                        else {
                            finalResult = y + finalResult;
                        }
                        result = Math.floor(result / 16);
                    }
                    hexaValue.value = finalResult;
                }
            }

        }
    }

}

//=================================Hexa -> Decimal===========================

function hexaToDecimal() {
    var val = hexaValue.value;
    var result = 0;
    var i = val.length - 1;
    var j = 0;
    var arr = { 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15 };


    for (let x of val) {
        if (x > 'F') {
            alert('Invalid Input!');
            Reset();
        }
        else {
            while (i > -1) {
                if (isNaN(val[i]) == true) {
                    var k = arr[val[i]];
                    var y = (Number(k)) * (16 ** [j]);
                    result += y;
                    i--;
                    j++;
                }
                else {
                    var y = (Number(val[i])) * (16 ** [j]);
                    result += y;
                    i--;
                    j++;
                }
            }
            decimalValue.value = result;
        }
    }
}

//=================================Hexa -> Binary============================

function hexaToBinary() {
    var val = hexaValue.value;
    var result = 0, finalResult = "";
    var i = val.length - 1;
    var j = 0;
    var arr = { 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15 };


    for (let x of val) {
        if (x > 'F') {
            alert('Invalid Input!');
            Reset();
        }
        else {
            while (i > -1) {
                if (isNaN(val[i]) == true) {
                    var k = arr[val[i]];
                    var y = (Number(k)) * (16 ** [j]);
                    result += y;
                    i--;
                    j++;
                }
                else {
                    var y = (Number(val[i])) * (16 ** [j]);
                    result += y;
                    i--;
                    j++;
                }
            }

            while (result > 0) {
                var y = result % 2;
                finalResult = y + finalResult;
                result = Math.floor(result / 2);
            }

            binaryValue.value = finalResult;
        }
    }
}


//=================================Hexa -> Octal=============================

function hexaToOctal() {
    var val = hexaValue.value;
    var result = 0, finalResult = "";
    var i = val.length - 1;
    var j = 0;
    var arr = { 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15 };


    for (let x of val) {
        if (x > 'F') {
            alert('Invalid Input!');
            Reset();
        }
        else {
            while (i > -1) {
                if (isNaN(val[i]) == true) {
                    var k = arr[val[i]];
                    var y = (Number(k)) * (16 ** [j]);
                    result += y;
                    i--;
                    j++;
                }
                else {
                    var y = (Number(val[i])) * (16 ** [j]);
                    result += y;
                    i--;
                    j++;
                }
            }

            while (result > 0) {
                var y = result % 8;
                finalResult = y + finalResult;
                result = Math.floor(result / 8);
            }

            octalValue.value = finalResult;
        }
    }

}

//=================================Events====================================

function decimalConvert() {
    decimalToBinary();
    decimalToOctal();
    decimalToHexa();
};

function binaryConvert() {
    binaryToOctal();
    binaryToDecimal();
    binaryToHexa();
}

function octalConvert() {
    octalToDecimal();
    octalToBinary();
    octalToHexa();
}

function hexaConvert() {
    hexaToDecimal();
    hexaToBinary();
    hexaToOctal();
}

function Reset() {
    binaryValue.value = "";
    octalValue.value = "";
    decimalValue.value = "";
    hexaValue.value = "";
};
