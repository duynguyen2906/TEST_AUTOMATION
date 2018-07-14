module.exports = {
    '@tags':['demo'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .setValue('input[type=text]', ['PTIT HCM', client.keys.ENTER])
        .waitForElementVisible('input[name=btnK]', 1000)
        .click('input[name=btnK]')
        .pause(1000)
        .end();
    }
  };