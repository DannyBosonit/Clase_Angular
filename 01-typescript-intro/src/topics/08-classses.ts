export class Person {
  //   public name: string;
  //   private address: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No address"
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const tony = new Person("Tony", "Stark", "New york");
const ironMan = new Hero("Ironman", 45, "Tony", tony);
console.log(ironMan);
