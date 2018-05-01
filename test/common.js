import chai from 'chai'
import q from 'q'
import _ from 'lodash'
import path from 'path'
import config from 'config'
import * as lib from '../lib'

Object.assign(global, lib, {
  chai,
  assert: chai.assert,
  expect: chai.expect,
  q,
  _,
  path,
  config
})