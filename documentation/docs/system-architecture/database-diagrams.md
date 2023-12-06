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
  Int level
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

FillInTheBlank {
  Int id PK
  String name
  Int Score
  Int level
}

UserFillInTheBlank {
  Int id PK
  String username FK
  Int fill_in_the_blank_id FK
  Date took_on
  Int score
}

BlankQuestion {
  Int id PK
  Int fill_in_the_blank_id FK
  String sentences
  String englishEquivalent
  String correctAnswer
  String englishWord
}

FlashCard {
  Int id PK
  String name
  Int Score
  Int level
}

Card {
  Int id PK
  Int flash_card_id FK
  String front
  String back
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


Users ||--|{ UserFillInTheBlank : ""
FillInTheBlank ||--|{ UserFillInTheBlank : ""
FillInTheBlank ||--|{ BlankQuestion : ""
FillInTheBlank }|--|| Languages : ""


FlashCard ||--|{ Card : ""
FlashCard }|--|| Languages : ""



```

## NoSQL translated example

```
# Users document
{
	_id: "barrydoan#8032",
	email: "tun70473@temple.edu",
	totalScore: 10,
	language: "Spanish",
	quizzes: [
		{
			_id: "1",
			name: "Quizz 1",
			score: 5
			tookOn: "2023/10/01",
		},
		{
			_id: "1",
			name: "Practice 1",
			score: "5",
			tookOn: "2023/10/01"
		}
	],
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

# Quiz document
{
	_id: "1",
	name: "Quiz 1",
	language: "Spanish",
        level: 2
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

# fill_in_the_blank document
{
	"name": "Spanish Numbers Set 1",
  	"language": "Spanish",
  	"level": 1,
  	"questions": [
    			{
      				"sentence": "Uno más uno es ___. (dos, tres, cuatro, cinco)",
			      	"englishEquivalent": "One plus one is ___.",
			      	"correctAnswer": "dos",
			      	"englishWord": "two"
			},
			{
			      	"sentence": "Tres menos dos es ___. (uno, dos, tres, cuatro)",
			      	"englishEquivalent": "Three minus two is ___.",
			      	"correctAnswer": "uno",
			      	"englishWord": "one"
			},
			{
			      	"sentence": "Cuatro más uno es ___. (cinco, seis, siete, ocho)",
			      	"englishEquivalent": "Four plus one is ___.",
			      	"correctAnswer": "cinco",
			      	"englishWord": "five"
			},
			{
			      	"sentence": "Cinco más cuatro es ___. (nueve, diez, once, doce)",
			      	"englishEquivalent": "Five plus four is ___.",
			      	"correctAnswer": "nueve",
			      	"englishWord": "nine"
			},
			{
			      	"sentence": "Seis más dos es ___. (ocho, nueve, diez, once)",
			      	"englishEquivalent": "Six plus two is ___.",
			      	"correctAnswer": "ocho",
			      	"englishWord": "eight"
			}
  		]
}

# FlashCard document
{
  	"name": "Unit 2 Set 3",
  	"language": "Spanish",
  	"cards": [
    			{
      				"front": "Which phrase means How much is the subway ticket? in Spanish?",
	      			"back": "¿Cuánto cuesta el boleto de metro?"
	    		},
	    		{
	      			"front": "What is the Spanish word for beer?",
	      			"back": "Cerveza"
	    		},
	    		{
	      			"front": "How would you ask Where is the nearest ATM? in Spanish?",
	      			"back": "¿Dónde puedo encontrar un cajero automático?"
	    		},
	    		{
	      			"front": "What does arroz con pollo mean in English when ordering food in Spanish?",
	      			"back": "Rice with chicken"
	    		},
	    		{
	      			"front": "Which phrase means Excuse me, how do I get to the museum? in Spanish?",
	      			"back": "¿Cómo llego al museo?"
	    		}
  		],
  	"level": 2
}


```
