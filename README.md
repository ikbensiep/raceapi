Racegame API
============

A backend for a [racing game](https://github.com/ikbensiep/game1) I'm developing.

Technically, this could be a static JSON file but maintaining that would get tedious over time.

Additionally, using an API allows for some content management and a way to (periodically) 'release' new track / car packs (competitions).

Introductuib
------------

In the game, the player starts a career in auto racing with the ultimate goal of winning the PRO championship. 
During their `career` the player can drive various cars at a variety of `venues` (racetracks) across different competitions, which **unlock** at various (xp) levels. 
For bragging rights, each venue has a leaderboard with the fastest laps driven at the venue.


🕹️ Gameplay overview
--------------------

- Beginning as an 👶 amateur (go kart) racer and climbing up the ladder one step per `season`.
- The player enters a season by joining a 🏢 `team`, which competes in a competition.
- Per season a team has access to various 🚗 `car`s, depending on those available in / eligible for the competition the team has entered.
- The player can join a team when their 🏅 `level` matches the team's level.
- Accordingly, a _team_ may join any 🏆 `competition` matching up to the team's level.
- A competition is described by a racing `category` (ie, type of cars), driving `level`, and one or more 📆`events`.
- An event consists of one or more 🏁`session`s (practice, qualifying, race).

🎰 Points
---------
**XP** may be obtained by completing `sessions` (training, qualifying, race) during `events`.

A player's **level** will go up by 1 when finishing **3rd** or **higher** in a competition. (unlocking a higher competition level)

_Winning_ a competition rewards the player with and an **additional xp bonus**, while the team will receive a **_financial_ bonus** in their 💰`budget`.

Finishing a competition ends the season and allows the player to start a new season.


🤡 Misc.
--------

Depending on the car category and the team's budget, car upgrades can be purchased such as (modified) wings, engine tuning etc.


💻 Getting started
------------------

This API is based on the [Curveball](https://curveballjs.org) [starter app](https://github.com/curveball/starter)

Build and run the project

    cd <project`name>
    npm i
    npm run build
    npm start

After this, open `http://localhost:8500` to browse the API.

Maybe run db migrations and try again

    npx knex migrate:up

Add a racing team using curl for now:

    curl -X POST http://localhost:8500/team -H 'Content-Type: application/json' -d '{"name":"Private Amateur", "level":0,"car":0, "competition": 0}';
