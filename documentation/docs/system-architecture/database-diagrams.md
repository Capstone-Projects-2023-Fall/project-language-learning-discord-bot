---
sidebar_position: 6
---
# Database diagram
## NoSQL Data Modeling
<img src ="https://raw.githubusercontent.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/main/images/LanguageBoNoSQLDataModeling.jpg" alt=""/>


This diagram illustrates the structure of individual documents in our MongoDB database. The documents are as follows:

- The 'users' document contains information about user progress, study history, scores, language preferences, and other user settings.
- The 'progresses' document stores information about default progress based on language. This includes the setup for units and lessons. This configuration will be incorporated into the 'users' document to track user progress based on language. 
- The 'practices' document stores data related to voice practices and quizzes. Upon completion of a voice practice or quiz by users, the results are recorded in the 'users' document. This information encompasses the score, timestamp of the user's activity, language, and the name of the quiz or practice.
