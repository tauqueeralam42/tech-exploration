const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'myapp',
    brokers: ['localhost:9092']
});

const group = process.argv[2];

async function consume() {
    
        const consumer = kafka.consumer({groupId: group});
        console.log("Connecting Consumer...");
        await consumer.connect();
        console.log("Consumer Connected...");
    
        await consumer.subscribe({
            topic: 'rider-updates',
            fromBeginning: true
        });
    
        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
                console.log(
                  `${group}: [${topic}]: PART:${partition}:`,
                  message.value.toString()
                );
              },
        });
    }

consume();