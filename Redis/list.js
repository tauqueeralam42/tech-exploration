const redis = require('ioredis');

const client = new redis();

async function init() {
    await client.lpush('tasks', 'first task');
    await client.lpush('tasks', 'second task');
    await client.rpush('tasks', 'third task');

    const tasks = await client.lrange('tasks', 0, -1);
    console.log(tasks); // [ 'second task', 'first task', 'third task' ]

}

init();