---
sidebar_position: 6
---

# Database Diagrams

## Entity-Relation Diagram






```mermaid
erDiagram
Users {
  String username PK
  String email
  Int totalScore
  Int level
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

Practices {
  Int id PK
  String name
  Int Score
}

Sentences {
  Int id PK
  String sentences
}

Questions }|--|{ Answers : "has"
Quizzes }|--|{ Questions : "has"
Users }|--|{ Quizzes : "did"
Users }|--|{ Languages : "select"
Quizzes ||--|| Languages : "belong to"

Users }|--|{ Practices : "did"
Practices }|--|{ Sentences : "has"
Practices ||--|| Languages : "belong to"



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
