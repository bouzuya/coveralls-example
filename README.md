coveralls-example
==============================================================================

[![Build Status](https://travis-ci.org/bouzuya/coveralls-example.png?branch=master)](https://travis-ci.org/bouzuya/coveralls-example)

coveralls-example.

Settings
------------------------------------------------------------------------------

1. mkdir project
2. mkdir lib test
3. npm init
4. package.json ( scripts.coveralls )
5. install modules for test
  - npm install --save-dev mocha
  - npm install --save-dev chai
6. install modules for coverage
  - npm install --save-dev coveralls
  - npm install --save-dev jscoverage
  - npm install --save-dev mocha-lcov-reporter
7. index.js ( process.env.MYAPP\_COV )
8. .travis.yml
9. Travis CI
10. Coveralls

