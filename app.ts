//Project Quiz System :
import inquirer from "inquirer";

console.log("Welcome to my adventure quiz game:")
console.log("you are required to gain maximum 4 points for the window.")

let points = 0

//question no 1
let question1 =await inquirer.prompt([
{
    name : "one",
    message :"typescript is the superset off?",
    type : "list",
    choices :["python","c++","java","javascript"]
}
])
if (question1.one == "javascript") {
    console.log("your answer is correct")
    points++
} else {
    console.log('incorrect answer')
}
//question no 2
  let question2 =await inquirer.prompt([
    {
        name : "two",
        message :"who is the founder of microsoft?",
        type : "list",
        choices :["elon musk","bill gates","Mark","Ali"]
    }
    ])
    if (question2.two == "bill gates") {
        console.log("your answer is correct")
        points++
    } else {
        console.log('incorrect answer')
    }
    //question no 3
let question3 =await inquirer.prompt([
    {
        name : "three",
        message :"which is the capital of Pakistan?",
        type : "list",
        choices :["lahore","karachi","ialamabad","quetta"]
    }
    ])
    if (question3.three == "islamabad") {
        console.log("your answer is correct")
        points++
    } else {
        console.log('incorrect answer')
    }
    //question no 4
let question4 =await inquirer.prompt([
    {
        name : "four",
        message :"who is the current governor of sindh?",
        type : "list",
        choices :["sanaullah","rehman khan","kamran tassori","imran khan"]
    }
    ])
    if (question4.four == "kamran tassori") {
        console.log("your answer is correct")
        points++
    } else {
        console.log('incorrect answer')
    }
    //question no 5
let question5 =await inquirer.prompt([
    {
        name : "five",
        message :"national language of Pakistan ?",
        type : "list",
        choices :["balochi","panjabi","sindhi","urdu"]
    }
    ])
    if (question4.five == "urdu") {
        console.log("your answer is correct")
        points++
    } else {
        console.log('incorrect answer')
    }
    //output conditions
    if (points >= 4) {
        console.log("congratulations!")
        console.log(`your points: ${points}`)
    } else {
        console.log("you loss! try next time")
        console.log(`your points: ${points}`)
    }
    