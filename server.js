// link pages together in index
// establish get routes
// save with fs write to db.json
// post to heroki
// write routes folder

const express = require('express');
const routerHTML = require('./routes/htmlRoutes')
const routerApi = require('./routes/apiRoutes')
// require routing 

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', routerHTML)
app.use('/', routerApi)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} `));
// lsiten at local port
