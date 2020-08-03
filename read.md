#Instruction to Run backend
  - Go to server
  - Enter yarn or npm install in terminal
  - Remember to change 
    MONGO_PATH
    MONGODB_DATABASE
    MONGO_USER
    MONGO_PASSWORD
    in db/connection.js
  - yarn start or npm run start
  - Server will start on port 8000

#Instruction to Run frontend
  - Go to client
  - Enter yarn or npm install in terminal
  - yarn start or npm run start
  - Server will start on port 3000

#Flow
  - Only one candidate can Register from an IP.
  - If you are registered you cant register again unless deleted by admin.
  - If you are not registered you can still watch the leaderboard and candidate detail but can't vote.
  - A registered candidate can edit his profile and can only vote once to anybody including himself.
  - To take admin access click on admin and then enter password "admin", this will give you admin access
  - As an edit you can edit anybody profile, delete anybody , add a candidate.
  - Admin can delete himself and when he/she done this, he/she have to register again.