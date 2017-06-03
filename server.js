const eo = require('express');
app = eo();
port = process.env.port || 8080;

router = require('./app/route');

app.use(router);

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});