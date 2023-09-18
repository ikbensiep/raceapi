export type Person = {
  id: number;
  name: string;
  level: number;
  team: Team;
}

export type Team = {
  id: number;
  href: string;
  name: string;
  car: number;
  level: number;
  competition: number;
}

export type NewTeam =
  Omit<Team, 'id' | 'href'>;

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
