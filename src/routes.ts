import router from '@curveball/router';
import home from './home/controller';

import teamCollection from './team/controller/collection';
import team from './team/controller/item';

export default [
  router('/', home),

  router('/team', teamCollection),
  router('/team/:teamId', team),

];
