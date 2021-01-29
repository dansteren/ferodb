function Fero(tables) {
  const result = {}
  Object.entries(tables).forEach(async ([tableName, url]) => {
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
    result[tableName] = table
  })
}
const database = await Fero({
  menuItems:
    'https://docs.google.com/spreadsheets/d/1-Dbd5GbM-5GE9PPe5oRCJi4-Iz0TPySYeYxa57dG38k/edit?usp=sharing',
})

console.log(`${database.menuItems.length} entries`)
