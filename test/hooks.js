let startTime

// before(() => {
//   log.info(`api-test configuration dump: ${JSON.stringify(config, null, 2)}`)
//   startTime = new Date()
//   log.info('Connecting from Database...');
//   return db.connect()
// })

// after(() => {
//   log.info("after hook")
//   log.info('Disconnecting from Database...');
//   return db.release()
//     .then(() => {
//       let duration = moment.duration(new Date().getMilliseconds() - startTime.getMilliseconds(), "milliseconds").format()
//       log.info(`all tests took ${duration}`)
//     })
//})
  