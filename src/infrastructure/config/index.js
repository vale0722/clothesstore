module.exports = {
  statics: process.env.REACT_APP_CLOTHES_STORE_STATICS,
  backend_url: process.env.REACT_APP_MERCADO_LIBRE_API,
  country: process.env.REACT_APP_COUNTRY_CODE,
  category_global: process.env.REACT_APP_CATEGORY_GLOBAL,
  social_networks: {
    facebook: process.env.REACT_APP_FACEBOOK_URL,
    instagram: process.env.REACT_APP_INSTAGRAM_URL,
    youtube: process.env.REACT_APP_YOUTUBE_URL,
    twitter: process.env.REACT_APP_TWITTER_URL,
  },
};
