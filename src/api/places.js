const _featured = [
  {
    image: {
      url: '@/../static/place.png',
      text: 'Text'
    },
    title: 'Some place',
    text: 'Check this out!'
  },
  {
    image: {
      url: '@/../static/place.png',
      text: 'Text'
    },
    title: 'Another place',
    text: '5/5 stars!'
  },
  {
    image: {
      url: '@/../static/place.png',
      text: 'Text'
    },
    title: 'Random place',
    text: 'Really random thing'
  },
  {
    image: {
      url: '@/../static/place.png',
      text: 'Text'
    },
    title: 'Hidden place',
    text: 'Try to find it!'
  }
]

export default {
  getFeatured () {
    return new Promise(resolve => {
      setTimeout(() => resolve(_featured), Math.ceil(Math.random() * 100) / 100 * 1000)
    })
  }
}
