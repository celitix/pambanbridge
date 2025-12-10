export default function sitemap() {
  return [
    {
      url: 'https://www.pambanbridge.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.pambanbridge.com/about-pamban-bridge',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://www.pambanbridge.com/destinations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
    url: 'https://www.pambanbridge.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
     {
    url: 'https://www.pambanbridge.com/getting-there',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
       url: 'https://www.pambanbridge.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
]
}

