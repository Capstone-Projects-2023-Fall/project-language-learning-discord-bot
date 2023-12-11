---
sidebar_position: 2
description: Documentation
---

### Connecting to general MongoDB Database

**Exception thrown when database can't be accessed**     
```json
class DatabaseConnectionException(Exception):
    "Raised when cannot connect to database"
    pass
```

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
  "totalScore": Integer
}
```

**Exception thrown when database can't find user entity**     
```json
class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass
```

**Exception thrown when database can't update the user entity**     
```json
class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass
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

**Exception thrown when database can't find quiz entity**     
```json
class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass
```

**Exception thrown when database can't update the quiz entity**     
```json
class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass
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

**Exception thrown when database can't find practice entity**     
```json
class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass
```

**Exception thrown when database can't update the practice entity**     
```json
class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass
```

### POST /users/fill_in_the_blanks
**Description:**    
Create a new fill-in-the-blank and store it in the database.
  
**Valid Request Body:**     
```json
{
  "_id": {
    "$oid": String
  },
  "name": String,
  "language": String,
  "level": Integer,
  "questions": [
    {
      "sentence": String,
      "englishEquivalent": String,
      "correctAnswer": String,
      "englishWord": String
    },
  ]
}
```

**Exception thrown when database can't find fill-in-the-blank entity**     
```json
class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass
```

**Exception thrown when database can't update the fill-in-the-blank entity**     
```json
class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass
```

### POST /users/flashcards
**Description:**    
Create a new flashcard and store it in the database.
  
**Valid Request Body:**     
```json
{
  "_id": {
    "$oid": String
  },
  "name": String,
  "language": String,
  "cards": [
    {
      "front": String,
      "back": String
    },
  ],
  "level": Integer
}
```

**Exception thrown when database can't find flashcard entity**     
```json
class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass
```

**Exception thrown when database can't update the flashcard entity**     
```json
class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass
```

### POST /users/progresses
**Description:**    
Create a new progression for a user and store it in the database.
  
**Valid Request Body:**     
```json
{
  "_id": {
    "$oid": String
  },
  "language": String,
  "progress": [
    {
      "name": String,
      "title": String,
      "lessons": [
        {
          "id": String,
          "name": String,
          "type": String,
          "isDone": Boolean
        },
        {
          "id": String,
          "name": String,
          "type": String,
          "isDone": Boolean
        }
      ]
    },
  ]
}
```

**Exception thrown when database can't find the progression entity**     
```json
class EntityNotFoundExcepton(Exception):
    "Raised when cannot find object by id"
    pass
```

**Exception thrown when database can't update the progression entity**     
```json
class DatabaseProcessingException(Exception):
    "Raised when having error while process"
    pass
```
