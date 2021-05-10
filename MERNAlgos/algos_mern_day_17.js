/* 
    Interview question that Neil received.
    Given two vars, x and y that store integers, swap their values WITHOUT
    creating any new variables or using any data types.
    Don't worry about creating a function either.
    No destructuring
*/
let x = 5;
let y = 3;

console.log(x,y);

x = x + y
y = x - y
x = x - y

console.log(x,y);


/* 
    Time in Words
    Write a function that accepts 2 numbers, hour and minute, for hour of the day and minutes of the hour,
    and return a string of the time. Follow these patterns:
                5:00 --> five o' clock
                5:01 --> one minute past five
                5:10 --> ten minutes past five
                5:15 --> quarter past five
                5:30 --> half past five
                5:40 --> twenty minutes to six
                5:45 --> quarter to six
                5:47 --> thirteen minutes to six
                5:28 --> twenty eight minutes past five

    EXAMPLE:
    let h = 5;
    let m = 47;

    timeInWords(h, m) should return "thirteen minutes to six"
*/
function timeInWords(hour, minute){
    let nums = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine",
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
        20 : "twenty",
        21 : "twenty one",
        22 : "twenty two",
        23 : "twenty three",
        24 : "twenty four",
        25 : "twenty five",
        26 : "twenty six",
        27 : "twenty seven",
        28 : "twenty eight",
        29 : "twenty nine"
    }

    if (minute == 0)
        console.log("It's " + nums[hour] + " o' clock somewhere");
    else if (minute == 1)
        console.log("one minute past " + nums[hour]);
    else if (minute == 59)
        console.log("one minute to " + nums[(hour % 12) + 1]);
    else if (minute == 15)
        console.log("quarter past " + nums[hour]);
    else if (minute == 30)
        console.log("half past " + nums[hour]);
    else if (minute == 45)
        console.log("quarter to " + nums[(hour % 12) + 1]);
    else if (minute <= 30)
        console.log(nums[minute] + " minutes past " + nums[hour]);
    else if (minute > 30)
        console.log(nums[60 - minute] + " minutes to " + nums[(hour % 12) + 1]);
}

timeInWords(5, 0);
timeInWords(5, 1);
timeInWords(5, 10);
timeInWords(5, 15);
timeInWords(5, 30);
timeInWords(5, 40);
timeInWords(5, 45);
timeInWords(5, 47);
timeInWords(5, 28);