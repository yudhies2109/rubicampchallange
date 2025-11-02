function getArrayInfo(arr){
    let arrPanjang = arr.length;
    let arrFirst = arr.at(0);
    let arrLast = arr[arr.length - 1];
    const isEmpety = (arr) => arr.length === 0;

    return {
        length: arrPanjang, 
        first: arrFirst, 
        last: arrLast, 
        isEmpty: isEmpety(arr)
    } 

}


console.log(getArrayInfo([1, 2, 3, 4, 5]));
console.log(getArrayInfo(["a", "b", "c"]));
console.log(getArrayInfo([]));
