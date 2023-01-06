const express = require("express") 
const cors = require("cors")
const app = express()
app.listen(5000, () => console.log(`server is listening to port 5000`))

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send('hello world, this is little node')
})

