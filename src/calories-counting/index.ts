import { HelperUtils } from "../utils";
import { readFileSync } from "fs";
// Five elves 
type ElveOne = {
    caloriesPerFood: number[],
    calorieTotal: number,
};

type ElveTwo = {
    caloriesPerFood: number[],
    calorieTotal: number,
};

type ElveThree = {
    caloriesPerFood: number[],
    calorieTotal: number,
};

type ElveFour = {
    caloriesPerFood: number[],
    calorieTotal: number,
};

type ElveFive = {
    caloriesPerFood: number[],
    calorieTotal: number,
};

const elveOne: ElveOne = {
    caloriesPerFood: [],
    calorieTotal: 0
}; 
const elveTwo: ElveTwo = {
    caloriesPerFood: [],
    calorieTotal: 0
}; 
const elveThree: ElveThree = {
    caloriesPerFood: [],
    calorieTotal: 0
}; 
const elveFour: ElveFour = {
    caloriesPerFood: [],
    calorieTotal: 0
}; 
const elveFive: ElveFive = {
    caloriesPerFood: [],
    calorieTotal: 0
}; 

const getFoodCalories = (array: string[]) => {

    for (let element in array) {
        elveOne.caloriesPerFood.push(parseInt(element));

        if (element === '') {
            continue;
        }
    }
}
// WIP 
const mapCaloriesToElves = () => {
    try {
        const rawData = readFileSync('src/calories-counting/input.txt', 'utf8')
        .split('\r\n').filter(l => l.length > 0).map(l => l.replace('\n', '').trim());
        //const dataArray = rawData?.split('\n');
        
        console.log(rawData);
    } catch (error) {
        
    }
}

mapCaloriesToElves();
