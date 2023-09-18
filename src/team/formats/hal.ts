import { Team } from  '../../types';

export function collection(teams: Team[]) {
  return {
    _links: {
      self: {
        href: '/team',
      },
      item: teams.map(team => ({
        href: `/team/${team.id}`,
        title: team.name,
      })),
    },
    total: teams.length,
    _embedded : {
      item: teams.map( team => item(team) )
    }
  };
}

export function item(team: Team) {
  return {
    _links: {
      self: {
        href: `/team/${team.id}`,
      },
      collection: {
        title: 'List of teams',
        href: '/team',
      }
    },
    name: team.name,
    level: team.level,
    budget: team.budget,
    car: team.car,
  };
}
