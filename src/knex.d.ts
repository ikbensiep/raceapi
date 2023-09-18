import { knex } from 'knex';

declare module 'knex/types/tables' {
  interface Team {
    id: number;
    name: string;
    budget: number;
    car: number;
    level: number;
  }

  interface Tables {
    teams: Team;
  }
}