describe('400 POST Req', () => {
    let expPCountryCodeError = "'bank_country_code' is required, and should be one of 'US', 'AU', or 'CN'"
      it('400 Response: should receive a 400 response when mandatory parameters - country code is not passed',() =>{
        let reqBody = utils.createRequest("LOCAL","","Jim PARKER","1 ","","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expPCountryCodeError});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Error recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when mandatory parameters - country code is incorrect',() =>{
        let reqBody = utils.createRequest("SWIFT","NZ","John Smith","012345678","ABCDCNAD","","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
            assert.deepEqual(res.body,{"error": expPCountryCodeError});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Error recieved ' + error.response.text);
          })
      })
      
})