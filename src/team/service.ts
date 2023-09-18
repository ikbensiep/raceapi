import { Team } from '../types';
import { NotFound } from '@curveball/http-errors';
import knex from '../knex';

export async function findAll(): Promise<Team[]> {
  return knex.select().from('teams');
}

export function findById(id: number): Team {

  // const team = findAll().find(team => team.id === id);

  // if (!team) {
  throw new NotFound(`Team with id ${id} not found`);
  // }

  // return team;
}
