function createDataStore() {
    const data = [];

    return {
        insert(item) {
            data.push(item);
        },

        find(query) {
            return data.filter(item => item[Object.keys(query)[0]] == query[Object.keys(query)[0]])
        },

        update(id, dataUpdate) {
            const index = data.findIndex(item => item.id == id);
            if (index == -1) {
                return { success: false }
            }
            data[index][Object.keys(dataUpdate)[0]] = dataUpdate[Object.keys(dataUpdate)[0]]
            return {
                success: true,
                updated: data[index]
            }

        },

        getStats() {

            return {
                totalRecords: data.length,
                departments: data.reduce((result, item) => !result.includes(item.department) ? [...result, item.department] : result, []),
                averageSalary: data.reduce((total, item) => total + item.salary, 0) / data.length,
                salaryRange: { min: data.reduce((min, item) => min.salary > item.salary ? item : min).salary, max: data.reduce((min, item) => min.salary < item.salary ? item : min).salary }
            }
        }
    }


}

// Tulis function createDataStore di sini

let store = createDataStore();
store.insert({ id: 1, name: "Alice", department: "IT", salary: 5000 });
store.insert({ id: 2, name: "Bob", department: "HR", salary: 4500 });
store.insert({ id: 3, name: "Charlie", department: "IT", salary: 5500 });

console.log(store.find({ department: "IT" }));
console.log(store.update(2, { salary: 4800 }));
console.log(store.getStats());