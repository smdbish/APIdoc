## apidoc
!https://softmouse.net/images/softmouse-colony-management-software-and-database-logo-0003.png


## install dependency



`npm i` or `yarn`

copy send_sample_request.js.bak to ./node_modules/apidoc/template/utils and replace send_sample_request.js

## start project

`npm start` -- start a express server to access apidoc

## build

`npm run build`

## access the doc

`http://localhost:3000/apidoc`


## change or update doc
apidoc.config.js  -- config the apidoc: name, title, version, header, footer...
each group, there is a file (*.js) in the folder ./routes. Now we have user.js, mouse.js, study.js, sample.js
For details of API definition, please refer to https://apidocjs.com/#param-api-body

after change, just build again (`npm run build`), it will auto take effect. don't need to stop/start
