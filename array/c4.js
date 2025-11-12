function manageQueue(arr, operations) {
    let result = [...arr];
    let enqueued = 0;
    let dequeued = 0;
    let operationCount = operations.length;

    for (let i = 0; i < operations.length; i++) {

        let values = operations[i].split(":").at(1);

        if (operations[i].startsWith("enqueue")) {
            if (!isNaN(values)) {
                result.push(parseInt(values));
                enqueued++;
            } else {
                result.push(values);
                enqueued++;
            }
        } else {
            result.shift();
            dequeued++;
        }
        // console.log("Type data", typeof(result[i]));
    }

    return {
        result: result,
        stats: {
            enqueued: enqueued,
            dequeued: dequeued,
            operations: operationCount
        }
    }
}



console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));