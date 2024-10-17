const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'myapp',
    brokers: ['localhost:9092']
});

async function createTopic() {

    const admin = kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Adming Connection Success...");

    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,
        }]
    });
    console.log("Topic Created Success [rider-updates]");

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}
createTopic();