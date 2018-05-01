describe('200 POST Req', () => {
    
    // it('200 Response: should receive a 200 response when correct parameters are passed for country US and method SWIFT',() =>{
    //   let reqBody = utils.createRequestBody("US");
    //   return http.post('/bank')
    //   .send(reqBody)
    //   .set('Content-Type', 'application/json')
    //   .set('Accept', 'application/json')
    //   .expect(200)
    //     .then(function (res) {
    //         assert.deepEqual(res.body,{"success":"Bank details saved"});
    //         console.log('response body '+res.text);
    //     })
    // })
    // it('200 Response: should receive a 200 response when correct parameters are passed for country AU and method SWIFT',() =>{
    //     let reqBody = utils.createRequestBody("AU");
    //     return http.post('/bank')
    //     .send(reqBody)
    //     .set('Content-Type', 'application/json')
    //     .set('Accept', 'application/json')
    //     .expect(200)
    //       .then(function (res) {
    //           assert.deepEqual(res.body,{"success":"Bank details saved"});
    //       })
    //     .catch(function(error) {
    //         console.log(error.response.text);
    //         throw new Error('Higher-level error. ' + error.response.text);
    //       })
    //   })
    // it('200 Response: should receive a 200 response when correct parameters are passed for country CN and method SWIFT',() =>{
    //     let reqBody = utils.createRequestBody("CN");
    //     console.log('request body '+reqBody);
    //     return http.post('/bank')
    //     .send(reqBody)
    //     .set('Content-Type', 'application/json')
    //     .set('Accept', 'application/json')
    //     .expect(200)
    //     .then(function (res) {
    //         assert.deepEqual(res.body,{"success":"Bank details saved"});
    //     })
    //   })
      it('200 Response: should receive a 200 response when correct parameters are passed for country US and payment method LOCAL',() =>{
        let reqBody = utils.createRequest("LOCAL","US","JoJo Johnn","1 ","","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
          .then(function (res) {
              assert.deepEqual(res.body,{"success":"Bank details saved"});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Higher-level error. ' + error.response.text);
          })
      })
      it('200 Response: should receive a 200 response when correct parameters are passed for country AU and payment method LOCAL',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","J2","123 A@","","010101","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
          .then(function (res) {
              assert.deepEqual(res.body,{"success":"Bank details saved"});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Higher-level error. ' + error.response.text);
          })
      })
      it('200 Response: should receive a 200 response when correct parameters are passed for country CN and payment method LOCAL',() =>{
        let reqBody = utils.createRequest("LOCAL","CN","John","0123456789-012345678","","","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
          .then(function (res) {
              assert.deepEqual(res.body,{"success":"Bank details saved"});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Higher-level error. ' + error.response.text);
          })
      })
      it('200 Response: should receive a 200 response when correct parameters are passed for country US and payment method SWIFT',() =>{
        let reqBody = utils.createRequest("SWIFT","US","J @2","01234567890123456","ICBKUSBJ","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
          .then(function (res) {
              assert.deepEqual(res.body,{"success":"Bank details saved"});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Higher-level error. ' + error.response.text);
          })
      })
      it('200 Response: should receive a 200 response when correct parameters are passed for country AU and payment method SWIFT',() =>{
        let reqBody = utils.createRequest("SWIFT","AU","1-John@","123-456-@","1234AU22","22-2-A","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
          .then(function (res) {
              assert.deepEqual(res.body,{"success":"Bank details saved"});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Higher-level error. ' + error.response.text);
          })
      })
      it('200 Response: should receive a 200 response when correct parameters are passed for country CN and payment method SWIFT',() =>{
        let reqBody = utils.createRequest("SWIFT","CN","ABC DEF G","012345678","ABCDCNAD","","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
          .then(function (res) {
              assert.deepEqual(res.body,{"success":"Bank details saved"});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Higher-level error. ' + error.response.text);
          })
      })
      
})