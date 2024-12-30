let month = "January"; 

switch (month.toLowerCase()) {
    case 'december':
    case 'january':
    case 'february':
        console.log(month + " is a winter month");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log(month + " is a spring month");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log(month + " is a summer month");
        break;
    case 'september':
    case 'october':
    case 'november':
        console.log(month + " is an autumn month");
        break;
    default:
        console.log("Invalid month");
}