const fs = require("fs")


// delete File
fs.writeFile("log.txt","Ayush jha\n",(err)=>{
    if (err){
        console.log("Error creating file", err)
    }
    console.log("Successfully: File created")
})

// readFile
fs.readFile("log.txt","utf-8",(err,data)=>{
    if(err){
        console.log("File Does not exist")
    }
    console.log("SuccessFull Fetch File Content")
    console.log(data)
})

//
fs.appendFile("log.txt", "new line\n",(err)=>{
    if(err){
        console.log("Error Updating file")
    }

    console.log("Success: File updates")
})


fs.unlink("log.txt",(err)=>{
    if(err){
        console.log("File not found! Cannot delete")
    }
    console.log("File Delected Successful")
})
