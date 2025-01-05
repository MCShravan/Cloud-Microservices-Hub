const {PubSub} = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

exports.publishMessage = async (req, res) => {
  const topicName = 'my-topic';
  const dataBuffer = Buffer.from(req.body.message);

  try {
    await pubSubClient.topic(topicName).publish(dataBuffer);
    res.status(200).send('Message published.');
  } catch (error) {
    console.error(`Error publishing message: ${error.message}`);
    res.status(500).send('Error publishing message.');
  }
};
