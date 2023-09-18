import knexInit from 'knex';
import * as configuration from './knexfile';
export interface DbTeam {
  id: number;
  name: string;
  car: number;
  level: number;
  competition: number;
}
declare module 'knex/types/tables' {
  interface Tables {
    teams: DbTeam;
  }
}
export const knex = knexInit(configuration);
export default knex;
