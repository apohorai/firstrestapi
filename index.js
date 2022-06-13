const express=require('express');
const app = express();
const PORT = 8080;
app.use(express.json())
app.listen(PORT, () => console.log(`it's alive`));
app.get("/positions", (req, res) => 
	{
	res.status(200).send({
		x: '1',
		y: '2'
     }
			    )
    }
       );
app.post('/positions/:id',(req,res) =>{

	const{id} = req.params;
	const{x} = req.body;
	const{y} = req.body;
	if (!x){
		res.status(418).send({message: "x is missing"})
	}
	
	if (!y){
		res.status(418).send({message: "y is missing"})
	}
	res.send(
		{
			position: `${x},${y},${id}`
		}
	)
}
)






