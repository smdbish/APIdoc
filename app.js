const express = require('express');
const app = express();

app.use(express.static('app/public', {
  extensions: ['htm', 'html'],
}))

app.listen(3000, ()=>{
  console.log('server is running on port 3000 !');
})