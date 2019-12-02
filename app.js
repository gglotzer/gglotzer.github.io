/**
* We are going to authenticate with Github and
* specify our repo name and file we just created.
*/
var options = {
  host: 'gglotzer.github.io', // <-- Private github api url. If not passed, defaults to 'api.github.com'
  protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
  user: 'gglotzer', // <-- Your Github username
  repo: 'git@github.com:gglotzer/gglotzer.github.io.git', // <-- Your repository to be used a db
  remoteFilename: 'database.json' // <- File with extension .json
};

// Require GithubDB
var GithubDB = require('..').default;
// Initialize it with the options from above.
var githubDB = new GithubDB(options);

// Authenticate Github DB -> grab a token from here https://github.com/settings/tokens
var personalAccessToken = process.env.TOKEN;
githubDB.auth(personalAccessToken);

// Connect to repository
githubDB.connectToRepo();

// You are now authenticated with Github and you are ready to use it as your database.
githubDB.save({"message": "wooohoo"});

var article1 = {
    title : 'githubDB rocks',
    published : 'today',
    rating : '5 stars'
}

var article2 = {
    title : 'githubDB rocks',
    published : 'yesterday',
    rating : '5 stars'
}

var article3 = {
    title : 'githubDB rocks',
    published : 'today',
    rating : '4 stars'
}

githubDB.save([article1, article2, article3]).then((res) => {
    // The result from the same
    console.log(res);
});
