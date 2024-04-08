# AlgoCode Problem Service

This microservice handles addition of problems and testcases along with solutions
for algocode platform.

To set up the project on your local machine do the following steps:

1. Clone the project
```
git clone https://github.com/Dev-sAHSRAH/AlgoCode-Problem-Service.git
```

2. Go inside the downloaded folder and install node modules

```
cd AlgoCode-Problem-Service && npm install
```

3. Create a new .env file in the root directory and set the following env variables
```
PORT=3000
ATLAS_DB_URL = "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.akpoq89.mongodb.net/Questions?retryWrites=true&w=majority&appName=Cluster0"
LOG_DB_URL = SAMPLE SHOWN ABOVE
```

4. Start the backend server
```
npm run dev
```
