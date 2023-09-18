import { Team, NewTeam } from '../types';
import { NotFound } from '@curveball/http-errors';
import { knex, DbTeam} from '../knex';

export async function findAll(): Promise<Team[]> {
  return (
    await (knex.select().from('teams'))
  ).map( record => mapRecord(record) );
}

export async function findById(id: number): Promise<Team> {
  const records = await knex.select()
    .from('teams')
    .where('id', id );

  if(!records.length) {
    throw new NotFound(`Team with id ${id} not found`);
  }

  return mapRecord(records[0]);

}

export async function create(team: NewTeam): Promise<Team> {
  const result = await knex('teams').insert({
    name: team.name,
    level: team.level,
    car: team.car,
    competition: team.competition
  });
  return {
    ...team,
    href: `/team${result[0]}`,
    id: result[0],
  };
}

function mapRecord(input: DbTeam) {
  return {
    id: input.id,
    href: `/team/${input.id}`,
    name: input.name,
    level: input.level,
    car: input.car,
    competition: input.competition
  };
}
