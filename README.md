# CI/CD with Akka Serverless

When pull request created:

- run tests
- build Docker image.

When GitHub release published:

- run tests
- authenticate to Docker Hub
- build Docker image tagged with GitHub release tag
- push Docker image to Docker Hub
- deploy Akka Serverless service.

Fully parmaterized with:

- GitHub release tag
- Docker Hub username
- Docker Hub token
- Akka Serverless token
- Akka Serverless project ID
