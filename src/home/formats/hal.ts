import * as fs from 'fs';
import * as path from 'path';

const pkg =
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../../../package.json'),
      'utf-8'
    )
  );

export function home() {
  return {
    name: pkg.name,
    version: pkg.version,

    _links: {
      'competition-collection': {
        href: '/competition',
        title: 'list of competitions'
      },
      'teams-collection': {
        href: '/team',
        title: 'list of teams'
      },
    },
  };
}
