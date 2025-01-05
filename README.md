# CloudMicroservicesHub

## Description
**CloudMicroservicesHub** demonstrates a serverless microservices architecture on Google Cloud Platform (GCP). This project integrates Google Cloud Functions, Cloud Run, and Pub/Sub to build a scalable, event-driven application. It features a Cloud Function for message publishing, a Cloud Run service for message processing, and Pub/Sub for event handling.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/MCShravan/CloudMicroservicesHub.git
   ```

2. **Navigate to the Project Directory:**
   ```sh
   cd CloudMicroservicesHub
   ```

## Usage

### Cloud Functions
**Deploy Cloud Function:**

1. Navigate to the `cloud-functions` directory:
   ```sh
   cd cloud-functions
   ```

2. Deploy the function:
   ```sh
   gcloud functions deploy publishMessage --runtime nodejs16 --trigger-http --allow-unauthenticated
   ```

**Test Cloud Function:**

Use the function URL to publish a message:
   ```sh
   curl -X POST https://us-central1-ms-proj-0.cloudfunctions.net/publishMessage \
   -H "Content-Type: application/json" \
   --data '{"message":"Hello, world!"}'
   ```

### Cloud Run
**Deploy Cloud Run Service:**

1. Navigate to the `process-service` directory:
   ```sh
   cd process-service
   ```

2. Build and deploy the container:
   ```sh
   gcloud builds submit --tag gcr.io/ms-proj-0/process-service
   gcloud run deploy process-service --image gcr.io/ms-proj-0/process-service --platform managed --allow-unauthenticated
   ```

**Test Cloud Run Service:**

Verify that the service is running by accessing the URL provided after deployment.

### Pub/Sub Integration
**Create Pub/Sub Topic and Subscription:**

1. Create a Pub/Sub topic:
   ```sh
   gcloud pubsub topics create my-topic
   ```

2. Create a subscription:
   ```sh
   gcloud pubsub subscriptions create my-subscription --topic=my-topic
   ```

3. Push Subscription to Cloud Run:
   ```sh
   gcloud pubsub subscriptions create my-push-subscription --topic=my-topic --push-endpoint=https://process-service-uu4fqwwwgq-uc.a.run.app/process-message --ack-deadline=10
   ```

## Contributing
We welcome contributions to this project! To contribute:

1. **Fork the Repository**
2. **Create a Feature Branch:**
   ```sh
   git checkout -b feature/your-feature
   ```

3. **Make Your Changes**
4. **Commit Your Changes:**
   ```sh
   git commit -am 'Add new feature or fix'
   ```

5. **Push to Your Branch:**
   ```sh
   git push origin feature/your-feature
   ```

6. **Create a Pull Request**

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Google Cloud Documentation
- Node.js Documentation
