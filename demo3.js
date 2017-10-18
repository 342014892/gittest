//arr.every()方法
var arr=[1,2,3,4,5];

function fn(a,b,c){
   return a > 1;
}
// console.log(arr.every(fn));

Array.prototype.every_ldl = function(fn){
    for(var i = 0;i < this.length;i++){
            if(fn(this[i],i,this) == false){
                return false;
            }
    }
    return true;
}
console.log(arr.every_ldl(fn));