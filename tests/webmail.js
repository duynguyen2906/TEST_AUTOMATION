module.exports = {
    '@tags':['webmail'],
    'Demo TEST' : function (client) {
      client
        //login
        .url('https://customersmartera.netlify.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Smart Era Email')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'duynguyen')
        .setValue('input[type=password]', 'duynguyen')
        .click('input[type=submit]')
        .pause(10000)
        //
        
    }
  };