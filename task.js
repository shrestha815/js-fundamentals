//student object
let student = {
    Name: "Adam Smith",
    Marks: 76,
}

if (student.Marks >= 50) {
    console.log('Passed');
}

else if (student.Marks < 50) {
    console.log('Failed');
}

console.log(student.Name + " has scored " + student.Marks + " marks.");
