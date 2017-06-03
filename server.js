const eo = require('express');
app = eo();
port = process.env.port || 8080;

app.get('/', (req,res)=>{

	res.send('Hi from server');
});

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});