# supertest-async-bug
Simple reproduction of supertest async bug

### Problem

It seems __supertest__ and __jest__ does not work well with code using `async`.

This express app has two endpoints `/test` and `/test-async` and tests for them.

It seems that the one with regular Promises works fine, while testing function with `async` fail with `TypeError: res.send is not a function`.

### Install and run tests

`npm install` then `npm test`.
