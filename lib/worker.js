'use strict';

const transpiler = require('@babel/core');
const workerpool = require('workerpool');
const Promise = require('rsvp').Promise;
const ParallelApi = require('./parallel-api');

// transpile the input string, using the input options
async function transform(string, options) {
  try {
    let result = await transpiler.transformAsync(
      string,
      ParallelApi.deserialize(options)
    );

    return {
      code: result.code,
      metadata: result.metadata,
    };
  } catch (error) {
    return {
      error: error.message,
      stack: error.stack,
    };
  }
}

// create worker and register public functions
workerpool.worker({
  transform: transform
});
