import { HelperUtils } from "../utils";

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
    
}; 
const elveTwo: ElveTwo; 
const elveThree: ElveThree; 
const elveFour: ElveFour; 
const elveFive: ElveFive;

const getFoodCalories = (array: string[]) => {

    for (let element in array) {
        elveOne.caloriesPerFood.push(parseInt(element));

        if (element === '') {
            continue;
        }
    }
}

const mapCaloriesToElves = async () => {
    try {
        const rawData = await HelperUtils.readerTxt('src/calories-counting/input.txt');
        const dataArray = rawData?.split('\n');
        
        console.log(dataArray);
    } catch (error) {
        
    }
}

mapCaloriesToElves();
