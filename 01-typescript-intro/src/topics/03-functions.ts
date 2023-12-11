function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2 = addNumbersArrow(3, 4);
// const multiplyResult = multiply(5);

// console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const dannyelgeek: Character = {
  name: "Dannyelgeek",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

healCharacter(dannyelgeek, 10);
healCharacter(dannyelgeek, 30);
healCharacter(dannyelgeek, 20);

dannyelgeek.showHp();

export {};
