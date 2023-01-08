[![CI](https://github.com/rostorare/restaurant_fe/actions/workflows/ci.yml/badge.svg)](https://github.com/rostorare/restaurant_fe/actions/workflows/ci.yml)
# restaurant_fe

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

How to use
Navigate on top of the site,
On the Menu site you can refresh the Menu table by hitting on the "Get" Button

The Submit Button only works when the fields are filled out correctly 
- If ther is only a value in ID -> it's Delete Button
- If there is a value in every field -> it's a Put Button
- If there is a value in every field except Id -> it's a Post Button
- If there is any other constellation the Submit button does not work and it displays -> Submit

FailedTests
- i have Tests under the folder tests/FailedTests, these were supposed to be unit tests but for the love
of everything i cant find out why it cant use an import statement outside a module...
