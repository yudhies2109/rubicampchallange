function manageQueue(arr, operations) {
    let enqueue = 0;
    let dequeue = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].startsWith("enqueue")) {
            let value = isNaN(operations[i].split(":")[1]) ? operations[i].split(":")[1] : parseInt(operations[i].split(":")[1]);
            enqueue++;
            arr.push(value);
        } else {
            arr.shift();
            dequeue++
        }
        console.log()
    }

    return {
        result: arr,
        stats: {
            enqueued: enqueue,
            dequeued: dequeue,
            operations: operations.length
        }
    }
}


// Tulis function manageQueue di sini

console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));