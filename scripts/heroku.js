const git = require('simple-git')();

git.add('./*')
  .commit('Commiting files for deployment')
  .push('heroku', 'master');
