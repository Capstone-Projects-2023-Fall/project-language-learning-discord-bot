---
sidebar_position: 6
---

# Database Diagrams

## Entity-Relation Diagram






```mermaid
erDiagram
Users {
  String username PK
  String language_id FK
  String email
  Int totalScore
  Int level
}

Languages {
  String id PK
  String name
}

UserQuiz {
  Int id PK
  String username FK
  Int quiz_id FK
  Date took_on
  Int score

}

Quizzes {
  Int id PK
  String name
  Int score
}

Questions {
  Int id PK
  String language_id FK
  Int quizz_id FK
  String question
}

Answers {
  Int id PK
  Int question_id FK
  String answer
  Boolean isCorrect
}

Practices {
  Int id PK
  String name
  Int Score
}

UserPractice {
  Int id PK
  String username FK
  Int practice_id FK
  Date took_on
  Int score
}

Sentences {
  Int id PK
  Int practice_id FK
  String sentences
}

Questions ||--|{ Answers : ""
Quizzes ||--|{ Questions : ""
Users ||--|{ UserQuiz : ""
Quizzes ||--|{ UserQuiz : ""
Users }|--|| Languages : ""
Quizzes }|--|| Languages : ""

Users ||--|{ UserPractice : ""
Practices ||--|{ UserPractice : ""
Practices ||--|{ Sentences : ""
Practices }|--|| Languages : ""



```

## NoSQL translated example

```
# Users document
{
	_id: "barrydoan#8032",
	email: "tun70473@temple.edu",
	totalScore: 10,
	level: 1,
	language: "Spanish",
	quizzes: [
		{
			_id: "1",
			name: "Quizz 1",
			score: 5
			tookOn: "2023/10/01",
		}
	],
	practices: [
		{
			_id: "1",
			name: "Practice 1",
			score: "5",
			tookOn: "2023/10/01"
		}
	]
}

# Practice document
{
	_id: "1",
	name: "Practice 1",
	language: "Spanish",
	sentences: [
		{
			sentence: "Cat has four legs"
		},
		{
			sentence: "Chicken has two legs"
		}
	]
}

# Quizz document
{
	_id: "1",
	name: "Quizz 1",
	language: "Spanish",
	questions: [
		{
			question: "How many planets are there in the solar system?"
			answers: [
				{
					answer: "Eight planets",
					isCorrect: true
				},
				{
					answer: "Nine planets",
					isCorrect: false
				},
				{
					answer: "Seven planets",
					isCorrect: false
				},
				{
					answer: "Six planets",
					isCorrect: false
				}
			]
		}
	]
}

```
