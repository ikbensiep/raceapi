Racegame API
============

A backend for a [racing game](https://github.com/ikbensiep/game1) I'm developing.

Technically, this could be a static JSON file but maintaining that would get tedious over time.

Introductuib
------------

In the game, the player starts a career in auto racing with the ultimate goal of winning the PRO championship. 

Beginning as an `amateur` (go kart) racer and climbing up the ladder one step per `season`, during their `career` the player can drive different `cars` at varying `venues`, which **unlock** at various (xp) levels. 

XP may be obtained by completing `sessions` (training, qualifying, race) during `events` in `competitions`.
A competition consists of multiple `events`. An event may consist of one or more `session`s.
A player's `level` will go up when finishing 3rd or higher in a competition. 

_Winning_ a competition rewards the player with a level up and an xp bonus, while the team will receive a financial bonus to their budget for the next season.

The player enters a season by joining a `team`, which competes in a `competition`. 

Depending on a team's `level`, a competition of a matching level may be joined. 

Accordingly, a player can join a team when their level matches the team's level.

Per season a team has access to various `cars`, depending on those available in / eligible for the competition the team has entered.

Depending on the car category and the team's budget, car upgrades can be purchased such as (modified) wings, engine tuning etc.



Getting started
---------------

This API is based on the [Curveball](https://curveballjs.org) [starter app](https://github.com/curveball/starter)

Build and run the project

    cd <project`name>
    npm i
    npm run build
    npm start

After this, open `http://localhost:8500` to browse the API.

Maybe run db migrations and try again

    npx knex migrate:up

Add a racing team using curl (for now):

    curl -X POST http://localhost:8500/team -H 'Content-Type: application/json' -d '{"name":"Private Amateur", "level":0,"car":0, "competition": 0}';