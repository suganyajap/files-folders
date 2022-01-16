//import file system
const fs=require("fs");
const folder_path=process.argv[2];
//reading a file in directory
fs.readdir(`./${folder_path}`,(err,files)=>{
    if(err){
        console.log("error occured",err);
    }
    else{
        console.log(`files in ${folder_path}`,files);
    }
})