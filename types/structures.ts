// Type inference syntax
let helloWorld: string = "Hello World";

// Type annotation syntax
interface User {
  name: string;
  id: number;
}

// Type inference
const user: User = {
  name: "John Doe",
  id: 1,
};

// Type annotation with classes and constructors
class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// Type annotation with classes and constructors
const userAccount: UserAccount = new UserAccount("John Doe", 1);

// Type annotation with functions
function getAdminUser(): User {
  return {
    name: "Admin",
    id: 1,
  };
}

// Type annotation with functions
function deleteUser(user: User): void {
  // ...
}

// Type annotation with type aliases
type MyBoolean = true | false;

// Type annotation with type aliases and unions
type WindowStates = "open" | "closed" | "minimized" | "maximized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Type annotation with parameters functions and unions
function getLength(obj: string | string[]) {
  if (Array.isArray(obj)) {
    return obj.length;
  } else {
    return obj.length;
  }
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
}

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get();

// backpack.add(23);
backpack.add("Hello");

// Structural type system
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point): void {
  console.log(`(${p.x}, ${p.y})`);
}

const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

// Type guards
// const color = { hex: "#187ABF" };
// logPoint(color);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);