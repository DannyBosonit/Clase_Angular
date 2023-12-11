const skills: string[] = ["bash", "counter", "healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const dannyelgeek: Character = {
  name: "Dannyelgeek",
  hp: 100,
  skills: ["bash", "counter"],
};

dannyelgeek.hometown = "Rivendell";

console.table(dannyelgeek);

export {};
