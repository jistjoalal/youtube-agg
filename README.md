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
  - [imports/api](https://github.com/jistjoalal/youtube-agg/blob/master/imports/api)

The scraped video data (url, thumbnail, etc.) is saved to
[Meteor/Mongo](https://docs.meteor.com/#/full/)
and rendered to the client using
[React](https://reactjs.org/).

- [client/main.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/client/main.jsx)
  - [imports/Routes.jsx](https://github.com/jistjoalal/youtube-agg/blob/master/imports/Routes.jsx)
    - [imports/ui/pages](https://github.com/jistjoalal/youtube-agg/blob/master/imports/ui/pages)

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
- <s>about page</s>
- <s>add an icon library</s>
- <s>google fonts for the title</s>
- <s>"view growth" tracking</s>
- <s>search bar</s>

- channel requests
  - style Request component
  - a way of limiting requests?

- flipmove leaving leftover elements
  - currently just rendering as null, need to remove
- render title links based on route (show home w/ non-null searchterm)
- close button padding
- make channel links buttons?
- icons/emojis for sort buttons/description?
- set window title
- more channel data?
  - (url, banner, subs, ttl views, post freq.)
  - sort channels
- notifications for new videos?

## local
```sh
git clone https://github.com/jistjoalal/youtube-agg.git
cd youtube-agg
meteor
```
