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


## local
```sh
git clone https://github.com/jistjoalal/youtube-agg.git
cd youtube-agg
npm install
meteor
```
![scrape button](https://i.gyazo.com/f69cb90fcf058b402f71c57259f2e576.png)
- the project doesn't come with a populated db. To have your
server search for videos, click the scrape button that only
appears in development mode.
- this could take a minute or two, and youtube might reject some of your
queries, so you may need to click the magic button more than once.


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
- <s>channel requests</s>

todo:

bugs:
- viewCount + viewsPerSec were null momentarily on live
  - this led to viewCount being displayed as 'NaN' 
  - it was a brand new video with potentially 0 views that caused it
- inf scroll not working on mobile
- flipmove leaving leftover elements
  - currently just rendering as null, need to remove

ideas:
- log errors in production
- loading/error when disconnected from server?
- more channel data?
  - (url, banner, subs, ttl views, post freq.)
  - link to youtube channel somewhere
  - sort channels
- notifications for new videos?
