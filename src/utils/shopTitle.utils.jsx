const shopTitle = (title) => {
  return title
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (match) => match.toUpperCase())
}

export default shopTitle
