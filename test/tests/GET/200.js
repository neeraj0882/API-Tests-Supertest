var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://thecatapi.com/api');
//api2 = supertest('https://jobs.github.com');
//pi3 = supertest('https://jsonplaceholder.typicode.com')


describe.only('Suite A', function() {
    it('Test 1',function(){
        return  api.get('/categories/list')
        .expect(200)
        .then(function(res){
            console.log('Response length '+res.text);
       })
    })
    // it('Test 2',function(){
    //     this.timeout(10000)
    //     return  api2.get('/positions.json?search=node')
    //     .expect(200)
    //     .buffer(true)
    //     .then(function(res){
    //         console.log('Response body '+res.body[0]["title"]);
    //         expect(res.body[0]["title"]).to.equal("Software Engineer");
    //         console.log('Response length '+res.body.length);
    //     })
    // })
});

// describe('Suite B',function(){
//     it('Test 1',function(){
//         return api3.get('/posts/1')
//         .expect(200)    
//         .then(function(res){
//             console.log(res.length); 
//             expect(res.body.length).not.equal(0);
//         })
//     })
// })



// describe.only('Suite A', function() {
// api = supertest('http://preview.airwallex.com:30001');
//     let reqBody = {
//                 "payment_method": "SWIFT", "bank_country_code": "US", "account_name": "John Smith",
                         
                  
//                  "account_number": "123", "swift_code": "ICBCUSBJ", "aba": "11122233A"
//                        }
//     it('Test 1',function(){
//         this.timeout(10000)
//         return  api.post('/bank',reqBody)
//         .expect(200)
//         .then(function(res){
//             console.log('Response length '+res.body.length);
//        })
//     })
// })