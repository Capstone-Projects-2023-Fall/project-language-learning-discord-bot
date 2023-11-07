---
sidebar_position: 2
description: Documentation
---

Backend API
=============================  
### POST /users/create
**Description:**    
Create a new user and store it in the database.
  
**Valid Request Body:**     
```json
{
  "_id": String,
  "quizzes": [
    {
      "_id": {
        "$oid": String
      },
      "name": String,
      "score": int,
      "tookOn": String
    }
  ],
  "totalScore": int
}
```

### POST /users/quizzes
**Description:**    
Create a new quiz and store it in the database.
  
**Valid Request Body:**     
```json
{
  "_id": {
    "$oid": String
  },
  "name": String,
  "language": String,
  "questions": [
    {
      "question": String,
      "answers": [
        {
          "answer": String,
          "isCorrect": String
        },
      ]
    },
  ]
}
```

### POST /users/practices
**Description:**    
Create a new practice and store it in the database.
  
**Valid Request Body:**     
```json
{
  "_id": {
    "$oid": String
  },
  "name": String,
  "language": String,
  "sentences": [
    {
      "sentence": String
    },
    {
      "sentence": String
    }
  ]
}
```
