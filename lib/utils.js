import config from 'config'

function get(name, defaultValue) {
  if (defaultValue === undefined) {
    return config.get(name) // throws error on config not found
  } else {
    return config.has(name) ? config.get(name) : defaultValue
  }
}

function genRandom() {
  return chance.integer({min: 10000000, max: 99999999});
}

function genSmall() {
  return chance.integer({min: 1, max: 10000});
}

function createRequest(paymentMethod,countryCode,accountName,accountNumber,swiftCode,bsbNum,abaNum){
  if (paymentMethod=="SWIFT"){
    return{
      payment_method: "SWIFT",
      bank_country_code: countryCode,
      account_name: accountName,
      account_number: accountNumber,
      swift_code: swiftCode,
      bsb:bsbNum,
      aba: abaNum
    }
  }
    if (paymentMethod=="LOCAL"){
      return{
        payment_method: "LOCAL",
        bank_country_code: countryCode,
        account_name: accountName,
        account_number: accountNumber,
        swift_code: swiftCode,
        bsb:bsbNum,
        aba: abaNum
      } 
  }
}

function createRequestBody(country,method) {
  if (country == "US")
  {
    return{ 
      payment_method: "SWIFT",
      bank_country_code: "US",
      account_name: "John Smith",
       account_number: "123",
       swift_code: "ICBCUSBJ",
       //aba: "11122233A"  //mandatory when US
      }

  }
  if(country == "CN")
  {
    return{ 
      payment_method: "SWIFT",
      bank_country_code: "CN",
      account_name: "John Smith",
       account_number: "012345678", //account number 8-20 chars long
       swift_code: "ICBCCNBJ" 
      }
  }
  if(country == "AU")
  {
    return{ 
      payment_method: "SWIFT",
      bank_country_code: "AU",
      account_name: "John Smith",
      account_number: "123456", //account number 6-9 chars long
      swift_code: "ICBCAUBJ",
      aba: "11122233A",
      bsb: "123456"
      }

  }
}
export default Object.freeze({
  get,
  genRandom,
  genSmall,
  createRequestBody,
  createRequest
})