
const workDays=["MON","TUE","WED","THU","FRI"];

function myWeek(days)
 {
    let week=[...days,"SUT","SAN"];
    return week;
}
console.log(myWeek(workDays));