# MOCHA-UI.

Ini adalah Automation testing menggunakan Mocha and Chai (node.js) + Selenium Webdriver.

## Installation
Buat file package.json dan berisi sebagai berikut
```json
{
  "dependencies": {
    "mocha": "^5.2.0",                          #test framework javascript
    "chai": "^4.1.2",                           #assertion library with expect style
    "chromedriver": "^77.0.0",                  #browser using chromedriver
    "selenium-webdriver": "^4.0.0-alpha.1",     #tools for automation web ui
    "mochawesome": "^3.0.2"                     #reporter
  }
}
```

Kemudian jalankan perintah npm (install node.js untuk perintah npm)
```js
npm install
```

## Usage
Menjalankan semua file test
```js
./node_modules/.bin/mocha ./test
```

Tambah waiting/timeout
```js
./node_modules/.bin/mocha ./test --timeout 18000
```

Reporter
```js
./node_modules/.bin/mocha ./test --recursive --reporter mochawesome --reporter-options reportDir=reports/mochawesome/ --timeout 180000
```

## Package.json
```json
  "scripts": {
    "test-ui": "./node_modules/.bin/mocha ./test --recursive --reporter mochawesome --reporter-options reportDir=reports/mochawesome/ --timeout 180000",
    "reports": "open 'reports/mochawesome/mochawesome.html'",
  },
```

## Run
```js
npm run test-ui                             //run all test
npm run test-ui -- --grep @tag              //run spesifik test using tag name
npm run test-ui -- --grep @skip --invert    //run all test and skip test
npm run reports                             //open reporter
```