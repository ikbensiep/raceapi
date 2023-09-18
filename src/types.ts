export type Person = {
  id: number;
  name: string;
  level: number;
  team: Team;
}

export type Team = {
  id: number;
  name: string;
  budget: number;
  car: number;
  level: number;
}

export type Competition = {
  level: number;
  name: string;
}

export type Car = {
  id: number;
  brand: string;
  type: number;
  level: number;
}
