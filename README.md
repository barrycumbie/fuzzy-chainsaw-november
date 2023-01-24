# fuzzy-chainsaw-november

## set up dev box
- download & install node 
- check it: `node -v`
- turn it off and on...might need to kill terminal/vsCode and restart for `node -v` to register
- (assumes bash/gitbash, vsCode) 

## set up REPO (initialize) 
- recommended: set up remote first, via github
- new repo
- no template + take their suggested name add on lab or some i.d. info + 
- public, add readme, gitignore = node, license = GNU GPL 3.0

## set up dev space
- tools: vsCode, terminal
- open workspace in vsCode
  - navigate to PROPER DIRECTORY
- connect remote repo: git clone
  - navigate to PROPER DIRECTORY, i.e., cd into the new dir/ git clone just created
  - for fun: git pull 
- install express or check `npm info express`
- initialize node project: `npm init -y`
- check over package.json 
- code your app.js 
- test locally `node app.js` & http://localhost:3000
  - if prompted (on a PC) allow to pass through firewall or whatever
- kill node process: `ctrl` + `c`


## push to remote
- git status
- git salute: add commit push (barry’ism)
- go check it on GitHub

## ready for depoyment on a PaaS? 

- first, refactor to grab PORT env: https://github.com/barrycumbie/silver-octo-guide-mike/blob/a15523ceeb1391679cfcf17813b9a69d1be5103d/app.js#L3
- 


- render? render! 
  - new web service
  - connect to GH repo
  - name, keep all defaults, start = `node app.js`, FREE

  - [good walk through](https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)
  - [env port](https://community.render.com/t/express-port-issue-on-web-service/4061)
  - use NPM vs YARN?
    - > For Build Command enter yarn as the value which is equivalent to the yarn install command. Yarn is a package manager similar to npm but faster than npm. 
  - https://render.com/docs/deploy-node-express-app

- here's how on the old Heroku: https://gist.github.com/barrycumbie/13051074ae9113bf90585c3887462500?permalink_comment_id=4319618#gistcomment-4319618 


notes
- when initializing git from dev box…resolve main/master
    - use “main” nomenclature 
- on vsCode.dev… can’t do terminal cmd
- 
