App.info({
  id: 'com.jistjoalal.idw',
  name: 'IDW',
  author: 'Jist',
  email: 'jistjoalal@gmail.com',
  website: 'https://github.com/jistjoalal',
  version: "0.0.13",
});

App.icons({
  'iphone_3x': 'public/apple-touch-icon.png',
  'android_xxxhdpi': 'public/android-chrome-192x192.png',
});

App.setPreference('SetFullscreen', true);

// youtube embed + links
App.accessRule('https://youtube.com/*');
App.accessRule('https://youtube.com/*', { type: 'navigation' });
App.accessRule('https://youtube.com/*', { type: 'intent' });
// youtube thumbnails
App.accessRule('https://i.ytimg.com/*');
App.accessRule('https://yt3.ggpht.com/*');

// nytimes link in about page
App.accessRule('https://www.nytimes.com/*', { type: 'intent' });

// github link
App.accessRule('https://github.com/*', { type: 'intent' });

