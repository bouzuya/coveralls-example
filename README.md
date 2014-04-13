coveralls-example
==============================================================================

coveralls-example.

[![Build Status](https://travis-ci.org/bouzuya/coveralls-example.png?branch=master)](https://travis-ci.org/bouzuya/coveralls-example)
[![Coverage Status](https://coveralls.io/repos/bouzuya/coveralls-example/badge.png)](https://coveralls.io/r/bouzuya/coveralls-example)

Settings
------------------------------------------------------------------------------

1. mkdir project
2. mkdir lib test
3. npm init
4. update package.json ( scripts.coveralls & scripts.coverage )
5. install modules for test
  - npm install --save-dev mocha
  - npm install --save-dev chai
6. install modules for coverage
  - npm install --save-dev coveralls
  - npm install --save-dev jscoverage
  - npm install --save-dev mocha-lcov-reporter
7. update index.js ( process.env.MYAPP\_COV )
8. .travis.yml
9. setting [Travis CI](https://travis-ci.org/)
10. setting [Coveralls](https://coveralls.io/)

Other examples
------------------------------------------------------------------------------

- [bouzuya/node-backlog-api](https://github.com/bouzuya/node-backlog-api)
- [bouzuya/bouzuya-fixtures](https://github.com/bouzuya/bouzuya-fixtures)
- [bouzuya/hubot-backlog-scrum](https://github.com/bouzuya/hubot-backlog-scrum)

