---
sidebar_position: 2
---

# System Block Diagram

![Block Diagram](https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/assets/89528532/98a4116f-e66e-472f-becd-78146593cc8c)

## Key Interactions:
### Users
Users will interact with Language Learning bot by sending or clicking commands within the Discord UI.

### Discord
THe Discord Client will pass a user's commands or requests to the python script where it will be processed depending on the appropriate function.

### Python Script
The script determines which commands/messages were issued and routes them to the respective functionality, sending the response back to the bot. 
The python script will retreive relevant user data from the database.

### Database
User data will be managed by the MongoDB database,
