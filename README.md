# DB Heartbeat

Deutsche Bahn operates more than 40,000 train runs daily on its more than 33,300 kilometer-long, modern rail network.

Let us think of this rail network as of a blood cirulatory system of the German railways:

![Streckennetz - Railway Network](streckennetz/trainRoutes-2017-05-13-preview.png)

We can measure the "blood pressure" - how many trains pass each network segment and - we will notice quite a few critical spots:

![Kritischen Stellen - Critical Paths](critical-paths/critical-paths-2017-05-13-preview.png)

We can even run a "stress electrocardiogram" and see how the network performs.

**Warning:** Web pages below load several MB of data.

We start from Berlinn Main Station and check how far we come in one day:

[![Zugläufe von Berling Hbf - Train run from Berlin Main Station](animation/BLS.png)](https://highsource.github.io/db-heartbeat/animation/BLS.html)

Now let us see which destinations we can reach from Frankfurt in one day:

[![Zugläufe von Frankfurt(Main)Hbf - Train run from Frankfurt Main station](animation/FF.png)](https://highsource.github.io/db-heartbeat/animation/FF.html)

# About

DB Heartbeat is developed on the [DB Hackathon 2017](https://www.mindboxberlin.com/index.php/db-hackathon-may-2017.html).

# Licenses

* Code is published under the [MIT License](https://raw.githubusercontent.com/highsource/db-heartbeat/master/LICENSE)
* Data
  * [Timetable data](https://github.com/fredlockheed/db-fv-gtfs) based on the [DB Fahrplan API](http://data.deutschebahn.com/apis/fahrplan/), published by the DB Vertrieb GmbH, which is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). No endorsement of the DB Vertrieb GmbH is implied. DB Vertrieb GmbH overtakes no responsibility and gives no guarantee for the completeness, correctness or accuracy of the data.
  * [Railway network data](http://data.deutschebahn.com/dataset/data-streckennetz), published DB Netz AG on [DB Open Data Portal]([railway network data](http://data.deutschebahn.com/dataset/data-streckennetz), licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). No endorsement of the DB Netz AG is implied. DB Netz AG overtakes no responsibility and gives no guarantee for the completeness, correctness or accuracy of the data.
