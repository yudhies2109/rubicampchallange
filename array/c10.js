function median(arr) {
    const sorted = arr.sort((num, acc) => num - acc);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    } else {
        return (sorted[mid - 1] + sorted[mid]) / 2
    }
}


function arrayAnalyzer(arr) {
    let original = [...arr];
    let length = arr.length;

    // Statics
    let sumValues = arr.reduce((num, acc) => acc = num + acc);
    let average = sumValues / length;
    let minValues = arr.reduce((num, acc) => num < acc ? num : acc);
    let maxValues = arr.reduce((num, acc) => num > acc ? num : acc);
    // let maxValues = Math.max(...arr);
    let medianValues = median(arr);

    let freq = data.reduce((obj, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});

    let maxFreq = Math.max(...Object.values(freq));
    console.log("Nilai Max", maxFreq);

    let mode = maxFreq === 1 ?
        null :
        Object.keys(freq).filter(key => freq[key] == maxFreq).map(Number);

    // Transformations Data
    let doubled = original.map(vall => vall + vall);
    let squared = original.map(vall => vall * vall);
    let filltered = original.filter(num => num > 3);
    let reversed = original.reverse();

    // Sorted
    let sortedAsc = original.sort((num, acc) => num - acc);
    let sortedDsc = original.sort((num, acc) => acc - num);

    // Validation 
    let isNumber = data.every(items => typeof items === "number");
    let hasNegatives = data.some(num => num < 0);
    let hasZeros = data.some(num => num == 0);
    let hasDuplicates = data.some((num, acc) => acc == num);

    return {
        original: original,
        length: length,
        statistics: {
            sum: sumValues,
            average: parseFloat(average.toFixed(2)),
            min: minValues,
            max: maxValues,
            median: medianValues,
            mode: mode
        },
        transformations: {
            doubled: doubled,
            squared: squared,
            filltered: filltered,
            reversed: reversed
        },
        sorted: {
            ascending: sortedAsc,
            sortedDsc: sortedDsc
        },
        validation: {
            allNumbers: isNumber,
            hasNegatives: hasNegatives,
            hasZeros: hasZeros,
            hasDuplicates: hasDuplicates
        }
    }
}


let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);
console.log(result);