describe('400 POST Req', () => {
    let expError = "'account_name' is required"
    let expLengthError = "Length of account_name should be between 2 and 10"
      it('400 Response: should receive a 400 response when mandatory parameters - account_name is not passed',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","","123 A@","","010101","");
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
            throw new Error('Error recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when mandatory parameters - account name length<2',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","J","123 A@","","010101","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Error recieved ' + error.response.text);
          })
      })
      it('400 Response: should receive a 400 response when mandatory parameters - account name length>10',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","1234567890J","123 A@","","010101","");
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError});
          })
        .catch(function(error) {
            console.log(error.response.text);
            throw new Error('Error recieved ' + error.response.text);
          })
      })
    })