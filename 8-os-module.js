const os = require('os');

//Method to get user info
const user = os.userInfo();
console.log(user);

//to get system uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

//current OS details

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);