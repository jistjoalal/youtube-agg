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

- [server/main.js](https://github.com/jistjoalal/youtube-agg/blob/master/server/main.js)
  - [imports/api/videos](https://github.com/jistjoalal/youtube-agg/blob/master/imports/api/videos.js)
  - [imports/api/channels](https://github.com/jistjoalal/youtube-agg/blob/master/imports/api/channels.js)
  - [imports/api/scraper](https://github.com/jistjoalal/youtube-agg/blob/master/imports/api/scraper)

The scraped video data (url, thumbnail, etc.) is saved to
[Meteor/Mongo](https://docs.meteor.com/#/full/)
and rendered to the client using
[React](https://reactjs.org/).

- [client/main.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/client/main.jsx)
  - [imports/Routes.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/imports/Routes.jsx)
    - [imports/ui/pages/Home.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/imports/ui/pages/Home.jsx)
    - [imports/ui/pages/Channel.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/imports/ui/pages/Channel.jsx)

## ideas / todos
- <s>embedded playback</s>
- <s>sorting</s>
- <s>pagination</s>
- <s>auto scroll on bottom of page setting</s>
- <s>filtering</s>
- <s>secure/pub-sub</s>
- <s>schedule scraping</s>
- <s>deploy to heroku</s>
- <s>channel list page</s>
- <s>way of adding more channels easily</s>

- parse channel doesn't need id as param
- tests
- about page
- transitions look glitchy on live site
- research how blocking scraper is / how it affects UX while running
- redirect to err page when offline

- add an icon library
- google fonts for the title
- pro styles

- more channel data
  - (url, banner, subs, ttl views, post freq.)
  - sort channels
- a way to request/vote on channel to be added?
- notifications for new videos?
- a way of tagging videos w/ keywords?
- search bar?

## local
```sh
git clone https://github.com/jistjoalal/youtube-agg.git
cd youtube-agg
meteor
```
