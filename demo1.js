//arr.join()方法 连接数组元素，返回字符串
var arr=[1,2,3,4,5];
console.log(arr.join("x"));


Array.prototype.Join_ldl = function(arr,x){
    var str = String(arr);
    for(var i = 0;i < str.length;i++){
        if(str[i] == ","){
            str = str.replace(",",x);
        }
    }
    return str;
}

console.log(arr.Join_ldl(arr,"+"));