# IDW-agg
Youtube subscriptions suck. Let's make a youtube scraper/aggregate for 
[IDW](https://en.wikipedia.org/wiki/Eric_Weinstein#Intellectual_dark_web)-related videos.

## live
[https://idw.herokuapp.com/](https://idw.herokuapp.com/)

## overview
Youtube API looks daunting so I built an old-fashioned scraper/parser using
[cheerio](https://github.com/cheeriojs)
that grabs the most recent videos every hour using
[SyncedCron](https://github.com/percolatestudio/meteor-synced-cron).

- [server/main.js]()
  - [imports/api/videos]()
  - [imports/api/scraper]()

The scraped video data (url, thumbnail, etc.) is saved to
[Meteor/Mongo](https://docs.meteor.com/#/full/)
and rendered to the client using
[React](https://reactjs.org/).

- [client/main.jsx]()
  - [imports/Routes.jsx]()
    - [imports/ui/pages/Home.jsx]()
    - [imports/ui/pages/Channel.jsx]()

## ideas / todos
- <s>embedded playback</s>
- <s>sorting</s>
- <s>pagination</s>
- <s>auto scroll on bottom of page setting</s>
- <s>filtering</s>
- <s>secure/pub-sub</s>
- <s>schedule scraping</s>
- <s>deploy to heroku</s>
- tests
- style w/ bootstrap
- some way of adding more channels dynamicaly?
- a way to request/vote on channel to be added?

## local
```sh
git clone https://github.com/jistjoalal/youtube-agg.git
cd youtube-agg
meteor
```