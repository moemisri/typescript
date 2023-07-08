let apple: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
// built in objects
let now: Date = new Date();

let numbers: number[] = [1, 2, 3, 5];
let colors: string[] = ["red", "blue", "green"];
let truths: boolean[] = [true, false, true, false];

class Car {}
let car: Car = new Car();
let points: { x: number; y: number } = {
  x: 10,
  y: 5,
};
const logNumber: (i: number) => void = (i: number) => {
  console.log("i", i);
};
logNumber(apple);

const json = '{"x":"1","y":"2"}';
const coordinates = JSON.parse(json);
console.log("coordinates", coordinates);

const words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element === "green") foundWord = true;
}
