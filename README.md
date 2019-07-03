# IDW-agg

Youtube subscriptions suck. Let's make a youtube scraper/aggregate for
[IDW](https://en.wikipedia.org/wiki/Eric_Weinstein#Intellectual_dark_web)-related videos.

[![Screenshot](https://jist-screenshotter.herokuapp.com/v1/desktop/https://idw.herokuapp.com/)](https://idw.herokuapp.com/)

## overview

Youtube API looks daunting so I built an old-fashioned scraper/parser using
[cheerio](https://github.com/cheeriojs)
that grabs the most recent videos every hour using
[SyncedCron](https://github.com/percolatestudio/meteor-synced-cron).

- [server/main.js](https://github.com/jistjoalal/youtube-agg/blob/master/server/main.js)
  - [imports/api](https://github.com/jistjoalal/youtube-agg/blob/master/imports/api)

The scraped video data (url, thumbnail, etc.) is saved to
[Meteor/Mongo](https://docs.meteor.com/#/full/)
and rendered to the client using
[React](https://reactjs.org/).

- [client/main.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/client/main.jsx)
  - [imports/Routes.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/imports/Routes.jsx)
    - [imports/ui/pages](https://github.com/jistjoalal/youtube-agg/blob/master/imports/ui/pages)

## Develop

```sh
git clone https://github.com/jistjoalal/youtube-agg.git
cd youtube-agg
npm install
meteor
```

## Deploy

Automatic Deploys to Heroku

## ideas / todos

- channel links should reflect if on that page
- display channel prof pic in videolist
- react-icons majorly bloating bundle
  - check out FA official pkg

ideas:

- notifications for new videos?
  - possible w/o account system?
  - email list?
  - PWA alerts?
- higher quality thumbnails - possible w/o YT API?
