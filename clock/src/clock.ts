let numberArray: number[] = [1, 2, 3]

let differentValues: [number, string] = [3, "år"]
console.log(differentValues)

//Enum PascalCase

const enum Size {Small = 1, Medium, Large };

let mySize: Size = Size.Large;
console.log(mySize);

  //Functions   utan return = void
	const calculateTax = (income: number, year = 2022) : number =>  {
  return income + year
	}
	calculateTax(33000)
	// objects + readOnly = kan inte skrivas om
let employee: { readonly id: number, name: string, retire: (date: Date) => void} = {id: 1, name:  "no name", retire: (date: Date) => {console.log(date)}};
employee.name = "Moch";
console.log(employee)

//Advanced types
//Alias

type Employee = {
	readonly id: number,
	name: string,
	retire: (date: Date) => void
}

let employee1: Employee = {
	id: 1,
	name: "Ola",
	retire: (date: Date) => {console.log(date)}
}


let kgToLbs = (weight: number | string) : number => {
	//narrowing
	if(typeof weight === "number" ){
		return weight * 2.2;
	}else{
		return parseInt(weight) * 2.2
	}

}
kgToLbs(10)
kgToLbs("10kg")

// intersection
let weight: number & string;
type Draggable = {
	drag: () => void
};

type Resizable = {
	resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
drag: () => {},
resize: () => {}
}

//Literal Types (exact, specific)

type Quantity = 50 | 100;

let quality: Quantity = 100;

type Metric = "cm" | "inch";

// null
let greet = (name: string | null | undefined) => {
if(name){
	console.log(name.toUpperCase())
}
else{
	console.log("Hola!")
}
}
greet(null)


type Customer = {
	birthDay: Date
};

function getCustomer(id: number) : Customer | null | undefined
 {
	return id === 0 ? null : {birthDay: new Date()}
 }

 let customer = getCustomer(0)
 let customer2 = getCustomer(1)

 console.log(customer?.birthDay, customer2?.birthDay?.getFullYear())

 type Task = [number, string, boolean];

 const halloj : Task = [1, "hej" , true];

 let variabel : boolean = true;

 let v2 : [string, boolean] = ["hej", true]

 let v3 : object = {hej: "hej"}

 type Oooo = {
	age: number,
	name: string,
	kids: boolean,
	born: Date
 }

 const human : Oooo = {
	name: "Helena",
	age: 36,
	kids: true,
	born: new Date("1986-10-24")
 }