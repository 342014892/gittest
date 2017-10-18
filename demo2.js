//forEach()方法 遍历数组
var arr = [1,2,3,4,5];

// arr.forEach(consoleArray);
function consoleArray(element, index,array) {
    console.log(`a[${index}]=${element}`);
}

Array.prototype.forEach_ldl = function(callback){
    for(var i = 0;i < this.length;i++){
        var index = i;
        var element = this[i];
        callback(element,index,this);
    }
}
arr.forEach_ldl(consoleArray);
