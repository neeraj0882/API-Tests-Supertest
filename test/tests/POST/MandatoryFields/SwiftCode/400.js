describe('400 POST Req', () => {
    let expError = "'swift_code' is required when payment method is 'SWIFT'"
    let expError_US = "The swift code is not valid for the given bank country code: US"
    let expError_CN = "The swift code is not valid for the given bank country code: CN"
    let expError_AU = "The swift code is not valid for the given bank country code: AU"
    let expLenError = "Length of 'swift_code' should be either 8 or 11"
      it('400 Response: should receive a 400 response when mandatory parameter - swift code is not passed for method SWIFT',() =>{
        let reqBody = utils.createRequest("SWIFT","US","J @2","01234567890123456","","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expError});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expError+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when incorrect swift code is not passed for US',() =>{
        let reqBody = utils.createRequest("SWIFT","US","J @2","01234567890123456","ICBCCNBJ","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expError_US});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expError_US+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when incorrect swift code is not passed for CN',() =>{
        let reqBody = utils.createRequest("SWIFT","CN","J @2","01234567","ICBCAUBJ","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expError_CN});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expError_CN+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when incorrect swift code passed for AU',() =>{
        let reqBody = utils.createRequest("SWIFT","AU","J @2","01234567","ICBCCNBJ","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expError_AU});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expError_AU+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when swift code < 8 characters is passed for AU',() =>{
        let reqBody = utils.createRequest("SWIFT","AU","J @2","01234567","ICBCAUB","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLenError});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expLenError+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when swift code > 11 characters is passed for AU',() =>{
        let reqBody = utils.createRequest("SWIFT","AU","J @2","01234567","ICBCAUBGHIJK","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLenError});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expLenError+' but recieved ' + error.response.text);
          })
      })
      //Test Failing it is accepting characters between 8 and 11 for Swift Code
      it('400 Response: should receive a 400 response when swift code is between 8 and 11 characters is passed for AU',() =>{
        let reqBody = utils.createRequest("SWIFT","AU","J @2","01234567","ICBCAUBAAA","010101","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLenError});
          })
          .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Expecting status code 400 with message- '+expLenError+' but recieved ' + error.response.text);
          })
      })
})