import { HelperUtils } from "../utils";
import { readFileSync } from "fs";

const mockInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`; 

const getInputData = (filePath: string): string[] => readFileSync(filePath, 'utf8').split('\n');

// part2  - Calculate sum of top 3 calories.  
const calculateSumOfTopThreeCalories = () => {
    try {
        const rawData = getInputData('src/calories-counting/day1.txt');
        const totalSum = calculateCalories(rawData, true);
        
        console.log(totalSum);
    } catch (error) {
        console.log(error);
    }
}

const calculateCalories = (dataSet: string[], partTwo = false): number => {
    let calorie = 0;
    let largestCalories = 0;
    let totalSumOfCalories = 0;

    const calorieTotals: number[] = [];

    for (let data of dataSet) {
        if (data.trim() === '') {
            if (largestCalories < calorie) {
                largestCalories = calorie;
                calorieTotals.push(largestCalories);
            }
            calorie = 0;
            continue;
        }
        calorie += parseInt(data.trim());
    }

    if (largestCalories < calorie) {
        largestCalories = calorie;
        calorieTotals.push(largestCalories);
    }

    if (partTwo) {
        calorieTotals.forEach((cal) => totalSumOfCalories += cal );
        return totalSumOfCalories;
    }
    console.log('Calories total =>', calorieTotals)

    return largestCalories;
}

const processTotalCalories = () => {
    try {
        
        const dataRead = getInputData('src/calories-counting/day1.txt');
        // for (let data of dataRead) {
        //     let strCal = data.trim();
        //     if (strCal === '') {
        //         if (mostCalories < calorie) {
        //             mostCalories = calorie;
        //         }
        //         calorie = 0;
        //         continue;
        //     }
        //     calorie += parseInt(strCal);
        // }
        let mostCalories = calculateCalories(dataRead);
        
        console.log(mostCalories);
    } catch (error) {
        console.log(error);
    }
}

//processTotalCalories();
calculateSumOfTopThreeCalories();