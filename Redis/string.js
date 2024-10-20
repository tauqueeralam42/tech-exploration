const {Redis} = require('ioredis');

const redis = new Redis();

async function init() {
    await redis.set('msg', 'Hello from Redis');    
    const value = await redis.get('msg');
    console.log(value); // value 1
}

init();