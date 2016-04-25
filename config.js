// config.js
export default {
  site: {
    title: 'React Universal Blog'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'hey-dancers',
    media_url: 'https://cosmicjs.com/uploads'
  }
}
