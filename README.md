# What is Advent of Code?

[Advent of Code](http://adventofcode.com) is an online event created by [Eric Wastl](https://twitter.com/ericwastl). Each year, starting on Dec 1st, an advent calendar of small programming puzzles are unlocked once a day at midnight (EST/UTC-5). Developers of all skill sets are encouraged to solve them in any programming language they choose!

-   [2018](https://github.com/FallDownTheSystem/AdventOfCode/tree/master/2018)
-   [2019](https://github.com/FallDownTheSystem/AdventOfCode/tree/master/2019)

# Node.js

2018 and first three days of 2019 are done in Node.js

## Setup

To setup the project:

```js
npm install
```

To run code for all days (includes performance tests):
replace package.jon start script with the year you want: `"start": "node ./2019/index.js"`

```js
npm start
```

To run tests:

```js
npm test
```

To run specific test file:

```js
npm run test -- ./2019/day1/day1.test.js
```

# Python

To run all days:

```
TBA
```

To run solutions for a single day use:

```
python 2019\day4\day4.py < 2019\day4\input.txt
```

To run unit tests:

```
python -m unittest discover 2019\day4\
```
