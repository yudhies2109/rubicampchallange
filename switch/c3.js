let grade = "E";

switch (grade) {
    case "A":
        console.log(`Grade ${grade}: Sangat Baik`)
        break;

    case "B":
        console.log(`Grade ${grade}: Baik`)
        break;

    case "C":
        console.log(`Grade ${grade}: Cukup`)
        break;
    
    case "D":
        console.log(`Grade ${grade}: Kurang`)
        break;

    case "E":
        console.log(`Grade ${grade}: Sangat Kurang`)
        break;

    default:
        console.log("Grade tidak valid.")
        break;
}
