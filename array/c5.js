function arrayOperations(arr, start, deleteCount, items) {
    let originalArr = [...arr];
    let slicedValues = arr.slice(start, start + deleteCount);

    let splicedValues = [...arr];
    let removed = splicedValues.splice(start, deleteCount, ...items);

    return {
        original: originalArr,
        sliced: slicedValues,
        spliced: splicedValues,
        removed: removed
    }

    // (console.log("Nilai Slice", slicedValues));

}


console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));