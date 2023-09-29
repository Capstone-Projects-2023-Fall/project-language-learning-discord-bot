```mermaid
erDiagram
Users {
  String username PK
  String email
  Int totalScore
}

Languages {
  String id PK
  String name
}

Quizzes {
  Int id PK
  String name
  Int score
}

Questions {
  Int id PK
  String question
}

Answers {
  Int id PK
  String answer
  Boolean isCorrect
}

Questions }|--|{ Answers : "has"
Quizzes }|--|{ Questions : "has"
Users }|--|{ Quizzes : "did"
Users }|--|{ Languages : "select"
Quizzes ||--|| Languages : "belong to"


```
