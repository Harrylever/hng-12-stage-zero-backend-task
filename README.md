# HNG12 Public API Task

### Project Description
This is a simple public API developed as part of the HNG12 Stage Zero Backend Task. The API provides the following details in JSON format:

- My registered email on the HNG12 Slack workspace.
- The current datetime in ISO 8601 format (UTC).
- The GitHub repository URL for this project.

The API is built using Node.js with Express.js and is publicly accessible.

<hr />

### Setup Instructions

Prerequisites

Ensure you have the following installed:
- Node.js (v16 or later)
- Git

#### Clone the Repository
```sh
git clone https://github.com/harrylever/hng-12-stage-zero-backend-task.git
cd hng-12-stage-zero-backend-task
```

#### Install dependencies
```sh
npm install
```

#### Run the server locally
```sh
npm start
```
The server will start on http://localhost:3000

#### Run in Development Mode
For hot-reloading during development:
```sh
npm run dev
```

### API Documentation
#### Base URL
- Deployed URL: `https://hng-12-stage-zero-backend-task-production.up.railway.app/harrylever`
- Local URL: `http://localhost:3000/harrylever`

## GET /harrylever
This endpoint returns my email, the current timestamp, and the GitHub repository URL.

#### Response Format
Status: 200 OK
```json
{
  "email": "ukanah15thdean@gmail.com",
  "current_datetime": "2025-01-31T12:34:56.789Z",
  "github_url": "https://github.com/harrylever/hng-12-stage-zero-backend-task"
}
```

#### Example Usage
```sh
curl -X GET https://hng-12-stage-zero-backend-task-production.up.railway.app/harrylever
```

#### Or visit in your browser:
https://hng-12-stage-zero-backend-task-production.up.railway.app/harrylever

<hr />

## Technology Stack
- Node.js (Runtime Environment)
- Express.js (Web Framework)
- Cors (Cross-Origin Resource Sharing)
- Helmet (Security Enhancements)
- Morgan (Logging)
- Compression (Response Compression)
- Body-parser (Request Body Parsing)

## Backlink
Interested in hiring a Node.js developer? Check out:
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

<hr />

## Author
- Ukanah Dean Onesi
- GitHub: [harrylever](https://www.github.com/harrylever)