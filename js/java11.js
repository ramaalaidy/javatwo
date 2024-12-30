let GPA = "B"; 

switch (GPA.toLowerCase()) {
    case 'a':
        console.log("Excellent");
        break;
    case 'b':
        console.log("Very Good");
        break;
    case 'c':
        console.log("Good");
        break;
    case 'f':
        console.log("Failed");
        break;
    default:
        console.log("Invalid GPA value");
}