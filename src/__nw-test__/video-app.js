module.exports = {
  'VideoApp tests' : function (client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('Demo Video App')
      .click('.btn.btn-success.btn-lg')
      .waitForElementVisible('body', 1000)
      .click('.btn.btn-success.btn-lg')

      .setValue('#title', 'Foo 1')
      .setValue('#image', 'https://placehold.it/1200x800')
      .setValue('#thumbnail', 'https://placehold.it/200x200')
      .setValue('#description', 'Foo bar desc 1')
      .click('.btn.btn-lg')
      .waitForElementVisible('.alert-success', 1000)

      .setValue('#title', 'Foo 2')
      .setValue('#image', 'https://placehold.it/1200x800')
      .setValue('#thumbnail', 'https://placehold.it/200x200')
      .setValue('#description', 'Foo bar desc 2')
      .click('.btn.btn-lg')
      .waitForElementVisible('.alert-success', 1000)

      .setValue('#title', 'Foo 3')
      .setValue('#image', 'https://placehold.it/1200x800')
      .setValue('#thumbnail', 'https://placehold.it/200x200')
      .setValue('#description', 'Foo bar desc 3')
      .click('.btn.btn-lg')
      .waitForElementVisible('.alert-success', 1000)

      .url('http://localhost:8080/video')
      .waitForElementVisible('body', 1000)
      .click('.col-xs-8.col-md-8 .dropdown-toggle')
      .click('.col-xs-8.col-md-8 .remove-video')
      .click('.col-xs-8.col-md-8 .dropdown-toggle')
      .click('.col-xs-8.col-md-8 .dropdown-menu-right a')
      .waitForElementVisible('body', 1000)

      .setValue('#title', ' Edited')
      .setValue('#image', 'https://placehold.it/1200x800')
      .setValue('#thumbnail', 'https://placehold.it/200x200')
      .setValue('#description', ' Edited')
      .click('.btn.btn-lg')
      .waitForElementVisible('.alert-success', 1000)
      .url('http://localhost:8080/video')
      .waitForElementVisible('body', 1000)

      .pause(3000)
      .end();
  }
};
