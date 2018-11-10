module.exports = async function Fero(tables) {
  const db = await Promise.all(
    Object.values(tables).map(async url => {
      const feedURL = `https://spreadsheets.google.com/feeds/list/${
        url.split('/')[5]
      }/od6/public/values?alt=json`
      const response = await fetch(feedURL)
      const data = await response.json()
      const entries = data.feed.entry
      const table = entries.map(entry => {
        const record = {}
        Object.entries(entry).forEach(([key, value]) => {
          if (key.startsWith('gsx$')) {
            record[key.split('$')[1]] = value.$t || null
          }
        })
        return record
      })
      return table
    })
  )
  const result = {}
  for (let i = 0; i < Object.entries(tables).length; i++) {
    const tableName = Object.entries(tables)[i][0]
    result[tableName] = db[i]
  }
  return result
}
