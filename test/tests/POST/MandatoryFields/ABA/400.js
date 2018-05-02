describe('400 POST Req', () => {
    let expError = "'aba' is required when bank country code is 'US'"
    let expLenError = "Length of 'aba' should be 9"
    //Test is failing as 200 is recieved even when aba is not passed for US with payment method Local
      it('400 Response: should receive a 400 response when ABA is not passed for country US and payment method Local',() =>{
        let reqBody = utils.createRequest("LOCAL","US","Smith","12345678","","","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expError});
          })
          .catch(function(error,res) {
            console.log(error.response.text);
            console.log(reqBody);
            throw new Error('Expecting status code 400 with message- '+expError+' but recieved ' + error.response.text);
          })
      })
      //Test is failing as 200 is recieved even when aba is not passed for US with payment method Local
      it('400 Response: should receive a 400 response when ABA is not passed for country AU and payment method Swift',() =>{
        let reqBody = utils.createRequest("SWIFT","US","Smith","12345678","ICBCUSAB","","");
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
            console.log(reqBody);
            throw new Error('Expecting status code 400 with message- '+expError+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when ABA is < 9',() =>{
        let reqBody = utils.createRequest("LOCAL","US","Smith","12345678","","","12345678");
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
            console.log(reqBody);
            throw new Error('Expecting status code 400 with message- '+expLenError+' but recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when ABA is > 9',() =>{
        let reqBody = utils.createRequest("LOCAL","US","Smith","12345678","","","1234567890");
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
            console.log(reqBody);
            throw new Error('Expecting status code 400 with message- '+expLenError+' but recieved ' + error.response.text);
          })
      })
    })
    