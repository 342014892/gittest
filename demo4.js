Array.prototype.Filter_ldl = function(fn) {
    var arr = [];
    for (var i = 0;i < this.length;i++){
        if(fn(this[i]) == true){
            arr.push(this[i]);
        }
    }
    return arr;
}

function fn(arr) {
    return arr > 10;
}

var myArr = [3,15,7,5,9,4];
console.log(myArr.Filter_ldl(fn));