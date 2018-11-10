# feroDB

A front-end read-only database

## Motivation

There are times in a static website when you want your data to be customizable
by a non technical person, but don't want the added cost and infrastruture of a
backend. FeroDB uses spreadsheets on Google Drive as a database. This provides
easy manipulation of your data without a backend.

## Installation

Add the following to the "dependencies" section of your package.json:

```
"ferodb": "dansteren/ferodb"
```

and run `npm install` or `yarn install`.

## Usage

Create as many Google Sheets as you need tables. For each sheet, go to File >
Publish to the web... and click "Publish". Close out of that dialog box and
click on the big "Share" button in the top right corner. Call Fero and give it
an object with the table name as a key and the share url as the value:

```
const database = await Fero({
  table1: 'https://the_share_link_url_of_a_google_spreadsheet',
  table2: 'https://another_link_url_of_a_google_spreadsheet',
})
console.log(`There are ${database.table1.length} items in table 1`)
console.log(`There are ${database.table2.length} items in table 2`)
```
