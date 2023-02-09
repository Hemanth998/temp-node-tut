const { readFile,writeFile } = require('fs');

//read and write file asynchronosly using callbacks
console.log("start");
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        const first = result;
        readFile('./content/first.txt','utf8',(err,result) => {
            if(err){
                console.log(err);
                return;
            }
            else{
                const second = result;
                writeFile('./content/fs-async-result.txt',`The result Asyncly is ${first} and ${second}`,(err,result) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                    else{
                        console.log(result);
                        console.log("done with the task");
                    }
                })
            }
        })
    }
})
console.log("starting the next task");