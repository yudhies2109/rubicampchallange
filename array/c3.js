function manageStack(arr, operations) {
    let result = [...arr];
    let log = [];

    for (let i = 0; i < operations.length; i++) {

        let values = operations[i].split("").at(-1);

        if (operations[i].startsWith("push")) {

            if (!isNaN(values)) {
                // console.log("ini bisa di ubah menjadi integer", values)
                result.push(parseInt(values));
                log.push(`Added ${values}`);
            } else {
                result.push(values);
                log.push(`Added ${values}`);
                // console.log("Tipe data:", typeof(values))
            }
            // console.log("added");
        } else {
            let removeValues = result.pop();
            log.push(`Removed ${removeValues}`);
            // console.log("Removed");
        }
    }
    return {
        result: result,
        log: log
    }
}

console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));