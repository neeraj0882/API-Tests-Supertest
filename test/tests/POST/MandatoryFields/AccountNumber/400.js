describe('400 POST Req', () => {
    let expError = "'account_number' is required"
    let expLengthError_US = "Length of account_number should be between 7 and 11 when bank_country_code is 'US'"
    let expLengthError_AU = "Length of account_number should be between 6 and 9 when bank_country_code is 'AU'"
    let expLengthError_CN = "Length of account_number should be between 8 and 20 when bank_country_code is 'CN'"
      it('400 Response: should receive a 400 response when mandatory parameters - account_unmber is not passed',() =>{
        let reqBody = utils.createRequest("LOCAL","US","JoJo Johnn","","","","123456789");
        console.log(reqBody);
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expError});
          })
      })
      it('400 Response: should receive a 400 response when account_number is > 17 for US',() =>{
        let reqBody = utils.createRequest("LOCAL","US","J Smith","123456789012345678","","","123456789");
        console.log(reqBody);
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError_US});
          })
      })
      //Test failing as returning incorrect message
    it('400 Response: should receive a 400 response when account_number is < 6 for AU',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","J2","12345","","010101","");
        console.log(reqBody);
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError_AU});
          })    
      })
        //Test failing as returning incorrect message
      it('400 Response: should receive a 400 response when account_number is > 9 for AU',() =>{
        let reqBody = utils.createRequest("LOCAL","AU","J2","1234567890","","010101","");
        console.log(reqBody);
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError_AU});
          })   
      })
       //Test failing as returning incorrect message
      it('400 Response: should receive a 400 response when account_number is < 8 for CN',() =>{
        let reqBody = utils.createRequest("LOCAL","CN","ABC DEF G","0123","ABCDCNAD","","");
        console.log(reqBody);
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError_CN});
          })  
      })
        //Test failing as returning incorrect message
      it('400 Response: should receive a 400 response when account_number is > 20 for CN',() =>{
        let reqBody = utils.createRequest("LOCAL","CN","ABC DEF G","012345678901234567890","ABCDCNAD","","");
        console.log(reqBody);
        return http.post('/bank')
        .send(reqBody)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(400)
          .then(function (res) {
              console.log(res.text);
              assert.deepEqual(res.body,{"error": expLengthError_CN});
          })    
      })
    })
    