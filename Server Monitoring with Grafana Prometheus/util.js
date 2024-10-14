function getRandomValue(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function doSomeHeavyTask(){
    const ms = getRandomValue([100,200,300,500,1000,1500,2000,2500]);
    const shouldThrowError = getRandomValue([1,2,3,4,5,6,7,8]) === 8;
    if(shouldThrowError){
        const randomError = getRandomValue([
            "DB Payment Failure",
            "DB Server is Down",
            "Access Denied",
            "Not Found Error",
        ]);
        throw new Error(randomError);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

module.exports = { doSomeHeavyTask };