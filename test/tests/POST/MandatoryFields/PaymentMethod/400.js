describe('400 POST Req', () => {
    let expPayMethodError = "'payment_method' field required, the value should be either 'LOCAL' or 'SWIFT'"
      it('400 Response: should receive a 400 response when mandatory parameters - payment_method is not passed',() =>{
        let reqBody = utils.createRequest("","US","JoJo Johnn","1 ","","","123456789");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expPayMethodError});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Error recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when mandatory parameters - payment_method is incorrect passed',() =>{
        let reqBody = utils.createRequest("LOC","AU","J2","123 A@","","010101","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
            assert.deepEqual(res.body,{"error": expPayMethodError});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Error recieved ' + error.response.text);
          })
      })
    })