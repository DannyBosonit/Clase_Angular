export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Daniel",
};

const passenger2: Passenger = {
  name: "Monica",
  children: ["Miguel", "Juan Pablo"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
