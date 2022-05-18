
var x = 15;
var result = ""

while (x>0){
    var y = x%2;
    result=y+result;
    x=Math.floor(x/2);
}
console.log(result);