import GoogleSheetsResponse from './googleSheetsResponse'

export interface FeroDBConfig {
  [key: string]: string
}

export interface Table<Row> {
  get: (id: string) => Row
}

interface Fero {
  [key: string]: object
}

/**
 * A front-end reaon-only database
 */
export default class FeroDB<ReturnType> implements Fero {
  [key: string]: object
  constructor(config: FeroDBConfig) {
    Object.entries(config).forEach(async (tableName, url) => {
      const feedURL = `https://spreadsheets.google.com/feeds/list/${
        url.split('/')[5]
      }/od6/public/values?alt=json`
      const response = await fetch(feedURL)
      const data: GoogleSheetsResponse = await response.json()
      const entries = data.feed.entry
      const table = entries.map(entry => {
        const record = {}
        Object.entries(entry).forEach((key, value) => {
          if (key.startsWith('gsx$')) {
            record[key.split('$')[1]] = value.$t || null
          }
        })
        return record as ReturnType
      })
      this[tableName] = table
    })
  }
}
