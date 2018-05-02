describe('400 POST Req', () => {
    let expError = "'bsb' is required when bank country code is 'AU'"
    let expLenError = "Length of 'bsb' should be 6"
      it('400 Response: should receive a 400 response when BSB is not passed for country AU',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","Smith","12345678","","","");
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
      it('400 Response: should receive a 400 response when BSB is not passed for country AU',() =>{
        let reqBody = utils.createRequest("SWIFT","AU","Smith","12345678","ICBCAUAB","","");
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
      it('400 Response: should receive a 400 response when BSB is < 6',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","Smith","12345678","","0101","");
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
      it('400 Response: should receive a 400 response when BSB is > 6',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","Smith","12345678","","01010101","");
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
    