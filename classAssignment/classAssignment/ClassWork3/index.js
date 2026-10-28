// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if (req.url === "/"){
//         res.end("Home page")
//     }
//     else if(req.url === "/about"){
//         res.end("About Page")
//     }
//     else if(req.url === "/contact"){
//         res.setHeader("content-Type", "text/plain")
//         res.end("This is contact Page")
//     }else{
//         res.end("error Path is Not found")
//     }
// })

// PORT = 8000


// server.listen(PORT, ()=>{
//     console.log("Server Started.......")
// })



const http = require("http")

const PORT = 4000


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("content-type", "text/plain")
        res.write("This is Home page")
        res.end()
    }
    else if(req.url === "/about"){
        res.setHeader("content-type","text/plain")
        res.write("This is About Page")
        res.end()
    }
    else if(req.url === "/contact"){
        res.setHeader("content-type", "text/plain")
        res.write("This is contact page")
        res.end()
    }else{
        res.write("Error 404!")
        res.end()
    }
})


server.listen(PORT,()=>{
    console.log(`👽 server Running on port ${PORT}`)
})




