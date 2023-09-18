import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import * as hal from '../formats/hal';
import * as teamService from '../service';

class TeamCollection extends Controller {
  get(ctx: Context) {

    ctx.response.type = 'application/hal+json',
    ctx.response.body = hal.collection(
      teamService.findAll()
    );

  }

  post() {
    return '';
  }
}

export default new TeamCollection();
