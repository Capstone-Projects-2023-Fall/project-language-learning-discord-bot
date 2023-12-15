---
sidebar_position: 2
---
# Integration tests

This section details the integration tests designed to validate the Language Learning Discord Bot (LDB) use cases against their functional requirements. The tests are constructed around the user journey within the Discord environment, ensuring that all interactions with the bot yield the expected outcomes. Mock objects are employed to simulate user inputs and server responses, facilitating an automated and repeatable testing process without manual data entry or result interpretation.

## Use Case Integration Tests

Test Case 1: Verify that the LDB can be successfully installed and invited to a Discord server.
 * Test Steps:
    1. Install the LDB on a Discord server.
    2. Invite the LDB to a Discord server.

 * Expected Results:
    1. The LDB should be successfully installed on the Discord server.
    2. The LDB should be successfully invited to the Discord server.

Test Case 2: Verify that users can create an account and select a starter language.
 * Test Steps:
    1. Create a new Discord account.
    2. Invite the LDB to a Discord server.
    3. Send the /start command to the LDB.
    4. Select a starter language.
 * Expected Results:
    1. The LDB should successfully create a new account for the user.
    2. The LDB should successfully set the user's starter language.

Test Case 3: Verify that users can access the full command list and view the leaderboard.
 * Test Steps:
    1. Send the /help command to the LDB.
    2. Verify that the full command list is displayed.
    3. Send the /leaderboard command to the LDB.
    4. Verify that the leaderboard is displayed.
 * Expected Results:
    1. The LDB should successfully display the full command list.
    2. The LDB should successfully display the leaderboard.

Test Case 4: Verify that users can start and complete vocabulary and pronunciation quizzes.
 * Test Steps:
    1. Send the /startVocabQuiz command to the LDB.
    2. Select a level and start the quiz.
    3. Answer all of the questions in the quiz.
    4. Verify that the quiz results are displayed.
    5. Send the /startVoiceQuiz command to the LDB.
    6. Join a voice channel on the server.
    7. Pronounce the words as instructed by the LDB.
    8. Verify that the pronunciation results are displayed.
 * Expected Results:
    1. The LDB should successfully start a vocabulary or pronunciation quiz.
    2. The LDB should successfully grade the user's answers and display the quiz results.

Test Case 5: Verify that user progress is saved and retrieved accurately.
 * Test Steps:
    1. Create a new Discord account.
    2. Invite the LDB to a Discord server.
    3. Create an account and select a starter language.
    4. Complete a vocabulary or pronunciation quiz.
    5. Log out of the Discord account.
    6. Log back into the Discord account.
    7. Send the /myScores command to the LDB.
    8. Verify that the user's quiz scores are displayed correctly.
 * Expected Results:
    1. The LDB should successfully save the user's progress.
    2. The LDB should successfully retrieve the user's progress from the database.
    3. The user's quiz scores should be displayed correctly.

Test Case 6: Verify that the LDB can send notifications to users.
 * Test Steps:
    1. Create a new Discord account.
    2. Invite the LDB to a Discord server.
    3. Create an account and select a starter language.
    4. Enable notifications from the LDB.
    5. Wait for a notification to be sent from the LDB.
 * Expected Results:
    1. The LDB should successfully send a notification to the user.
    2. The notification should be displayed correctly in the Discord client.

## Integration Test Environment
The integration testing will be conducted on a dedicated Discord server. The following hardware and software requirements will be used:
   * Hardware: Devices running on the following Operating System
     1. OSX
     2. Windows
     3. Linux
     4. Android
     5. Discord Server LDB Server (https://discord.gg/zW5RbpbTT)