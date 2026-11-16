    // TASKS A: STUDENT INFORMATION AND VARIABLE
    
    let fullName = "Rabiu Alabi";
    let age = 70;
    let registrationStatus = true;
    let department;
    let htmlScore = "90%";
    let cssScore = "95%";
    let javaScore = null;
    const outStanding = "$500";
    let attendance = "days" / 60;

    console.log(fullName)
    console.log(typeof fullName)

    console.log(age)
    console.log(typeof age)

    console.log(registrationStatus)
    console.log(typeof registrationStatus)

    console.log(department)
    console.log(typeof department)

    console.log(htmlScore)
    console.log(typeof htmlScore)

    console.log(cssScore)
    console.log(typeof cssScore)

    console.log(javaScore)
    console.log(typeof javaScore)

    console.log(outStanding)
    console.log(typeof outStanding)

    console.log(attendance)
    console.log(typeof attendance)

    // TASK B: Data type investigation

    console.log("15" + 5);
    //"15" is a string because it is inside quotation marks and when JS see + with a strings its join them.

    console.log("15" - 5);
    //JS automatically convert "15" from a string to  a number and performs subtraction.
    
    console.log("15" * 2);
    //JS automatically convert "15" from a string to  a number and performs multiplication.

    console.log("15" / 3);
    //JS automatically convert "15" from a string to  a number and performs division.

    console.log(10 + true);
    //JS treats true as 1 when doing mathematical calculations.

    console.log("10" === 10);
    //"===" operator checks both the value and data type

    console.log("10" == 10);
    //"=="operator checks whether the values are equal and it automatically convert one data type into another.

    console.log(typeof null);
    //"null" represents an empty value, JS returs "object" when used "typeof null".

    console.log(typeof NaN);
    //"NaN" it represents an invalid numerical result. so JS classifies it as a number.

    console.log(Boolean("false"));
    //"false" is a string, JS treats any non-empty string as "true" when converting it to  a Boolean. Therefore, "false" turns to "true".

    console.log(Boolean(""));
    //the quotation marks are empty, JS treats an empty strin as false.

    //TASK C: Data Validation and type coercion
    //1. Convert valid numeric strings into a number

    let _age = "19";
    let _htmlScore = "75";

    _age = Number(_age);
    _htmlScore = Number(_htmlScore);

    console.log(_age);
    console.log(_htmlScore);
    
    //2. Identify values that cannot be converted into valid numbers.

    let _cssScore = "eighty";
    _cssScore = Number(_cssScore);
    console.log(_cssScore)
    //it would display NaN because JS cannot convert the word "eight" into a valid number.
    //1.IMPLICIT: This is the process when JS automatically converts one data type into another without telling you. Eg
     
    let rabiuAge = "19";
    console.log(rabiuAge - 5);

    //2. EXPLICIT: This is the process when you manually tell JS to convert a value into another datatype. Eg

    let alabiAge = "13";
    alabiAge = Number(alabiAge);
    console.log(alabiAge);

    //TASK D: Examination Eligibility

    let studendAge = 20;
    let isRegistered = true;
    let feesCleared = true;
    let _attendance = 85;

    if(studendAge >= 18 && isRegistered === true && feesCleared === true && _attendance >= 75) {
        console.log("Congratulation! you are eligible to participate in the examination");
    }
    else {
        console.log("Sorry! you're not eligible to participate in the examination");
    }

    //TASK E: Score processing and grading

    let $htmlScore = 85;
    let $cssScore = 75;
    let $javaScore = 90;

    let totalScore = $htmlScore + $cssScore + $javaScore;
    let averageScore = totalScore / 3;

    console.log("Total Score: ", totalScore);
    console.log("Average Score: ", averageScore);

    if (averageScore >= 80) {
        console.log("Grade: A");
    }
    else if (averageScore >= 70) {
        console.log("Grade: B");
    }
    else if(averageScore >= 60) {
        console.log("Grade: C");
    }
    else if(averageScore >= 50) {
        console.log("Grade: D");
    }
    else if ($htmlScore < 0 || $htmlScore > 100) {
        console.log("Invalid score");
    }
    else {
        console.log("Grade: F");
    }

    //TASK F: Testing and critical thinking

    //QUESTION 1
    console.log("30" + 10);
    console.log("50" - 20);
    //The + operator joins both the string and number together and given an output 3010
    //While - operator makes JS automatically convert "50" into a number before subtraction.

    //QUESTION 2
    console.log(typeof NaN);
    //It represent an invalid number. Therefor, JS classifies NaN as number because it is part of its numerical data type.
    
    //QUESTION 3
    console.log("5" == 5);
    console.log("5" === 5);
    //"=="compares values and allows JS to convert data types automatically.
    //"==="compares  both values and data types without automatic convertion.

    //QUESTION 4
    let score = "fifty";
    score = Number(score);
    console.log(score);
    //It is dangerous because user may enter invalid information instead of numbers. And this can produce incoreect cal. & results.
     
    //QUESTION 5
    let $age = 16;
    let _isRegistered = true;
    let _feescleared = true;
    let $attendance = 55;

    if ($age >= 18 && _isRegistered && _feescleared && $attendance >= 50) {
        console.log("Eligible");
    }
    else {
        console.log("Not eligible");
    }
    //Yes, a student can have valid examination scores but still be ineligible because the have failed another requirement.

    //QUESTION 6
    let _score = 70;
    _score = Number(_score);

    console.log(_score);
    console.log(typeof _score);
    //Explicit type conversion allows us to control how JS converts data from one type to another.
        
    