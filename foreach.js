var arr = [1,2,3,4,5];
// delete arr[1];
// arr.forEach(s);

Array.prototype.forEach_ldl = function(callback,thisArg){
    if(typeof callback == "function"){
        for(var i = 0;i < this.length;i++){
            if(Object.prototype.hasOwnProperty.call(this,i)){
                callback(this[i],i,this);
            }
        }
    }else{
        throw new TypeError(`${callback} is not a function`);
    }

}
arr.forEach_ldl(fn);

function fn(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
}