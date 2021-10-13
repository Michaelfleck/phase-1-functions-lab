// Code your solution in this file!




const headquarters = 42;
const feet = 264;



function distanceFromHqInBlocks(num) {
    if (num >= 42){
        return (num - headquarters);
    }
    else {
        return (headquarters - num);
    }
}

// Second, customers want Scuber to calculate the number of feet travelled based on
// the distance. Write a function called `distanceTravelledInFeet` that takes in the
// beginning and destination blocks and returns the number of feet travelled. Each
// block in Manhattan is 264 feet long. For example `distanceTravelledInFeet(34, 38)`
// representing 34th St to 38th St, returns 1056 (`(38-34)*264`). You can assume
// that we are only calculating distance uptown/downtown, not from river to river.


function distanceFromHqInFeet(num) {
    if (num >= 42){
        return ((num-42)*feet);
    }
    else {
        return ((42-num)*feet);
    }
}

// const feet = 264
function distanceTravelledInFeet(num1, num2) {
    if (num1 >= num2){
        return ((num1-num2)*feet);
    }
    else {
        return ((num2-num1)*feet);
    }
}


// calculatesFarePrice`: Given the same starting and ending block as the
//   previous test (_hint (38s, 34e) hint_), return the fare for the customer. The first four
//   hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
//   cents per foot (not including 400, which are free!). Then Scuber charges a
//   flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
//   does not allow any rides over 2500 feet — the function returns `'cannot travel that far'` if a ride over 2500 feet is requested.


// ((start-destination)-400




function calculatesFarePrice(start, destination) {
    //let distance = ((start-destination) * feet);
    const distance = distanceTravelledInFeet(start, destination);
    const freeSample = 0;
    const flatFare = 25;

    if (distance <= 400) {
        return (freeSample);
    }
    else if ((distance > 400) && (distance <= 2000)) {
        return ((distance - 400) * .02);
    }
    else if ((distance > 2000) && (distance <= 2500)) {
        return(flatFare);
    }
    else if (distance > 2500){
        return ('cannot travel that far');
    }
}

calculatesFarePrice(34,32)


















