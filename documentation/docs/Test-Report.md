## Test Report for Database Test Cases

### Purpose

This test suite validates the functionality of the database module's methods within the context of the defined test cases. It examines different scenarios and verifies the expected behavior of the database operations.

### 1. `test_findUser_not_found`

- **Purpose:** Checks the behavior of the `findUser` method when the user is not found.
- **Outcome:** The test ensures the method returns `None` when the user is not present.
- **Result:** Test passed successfully.

### 2. `test_findUser_found`

- **Purpose:** Validates the `findUser` method when the user is found.
- **Outcome:** The test confirms the method returns the user object when found.
- **Result:** Test passed successfully.

### 3. `test_insertUser`

- **Purpose:** Tests the insertion of a new user into the database.
- **Outcome:** The test verifies the successful addition of a new user.
- **Result:** Test passed successfully.

### 4. `test_changeLanguage`

- **Purpose:** Evaluate the functionality of changing the user's language.
- **Outcome:** The test ensures the user's language is updated to the provided language.
- **Result:** Test passed successfully.

### 5. `test_getQuizzes_no_record`

- **Purpose:** Examines the scenario when no quizzes are available for a specific language.
- **Outcome:** The test checks if an empty list is returned when no quizzes are found.
- **Result:** Test passed successfully.

### 6. `test_getQuizzes_has_record`

- **Purpose:** Checks the retrieval of quizzes when at least one exists for a language.
- **Outcome:** The test confirms the retrieval of quizzes when available.
- **Result:** Test passed successfully.

### 7. `test_getRandomQuiz_no_record`

- **Purpose:** Tests the case when no quizzes are available for a specific language.
- **Outcome:** The test ensures that `None` is returned when no quizzes are found.
- **Result:** Test passed successfully.

### 8. `test_getRandomQuiz_has_record`

- **Purpose:** Examines the retrieval of a random quiz for a language when available.
- **Outcome:** The test verifies the successful retrieval of a quiz.
- **Result:** Test passed successfully.

### 9. `test_getFlashcards_has_record`

- **Purpose:** Checks retrieval of flashcards when at least one record exists.
- **Outcome:** The test confirms retrieval when quizzes are found.
- **Result:** Test passed successfully.

### 10. `test_RandomFlash_has_no_record`

- **Purpose:** Checks retrieval of random flashcards with no records.
- **Outcome:** The test ensures that `None` is returned when no cards are found.
- **Result:** Test passed successfully.

### 11. `test_getUsrFlashcards_has_fake_unit`

- **Purpose:** Checks retrieval of user-specified flashcards with no records.
- **Outcome:** The test ensures that `None` is returned when no cards are found.
- **Result:** Test passed successfully.

### 12. `test_updateUserQuiz`

- **Purpose:** Validates the updating of user quiz information.
- **Outcome:** The test checks if the user's quiz information is updated successfully.
- **Result:** Test passed successfully.

### 13. `test_updateUserQuiz_raise_exception`

- **Purpose:** Examines the scenario when updating user quiz information raises an exception.
- **Outcome:** The test verifies the correct handling of expected exceptions.
- **Result:** Test passed successfully with exception handling.

### Known Problems

No known problems or failed tests were observed during the test execution.


## Test Report for Discord Bot Commands

### Purpose

This test suite aims to validate the functionality of various commands implemented within the Discord bot.


#### 1. Test: `test_ping`

- **Purpose:** Test the functionality of the `ping` command.
- **Outcome:** Verifies if the command sends "Pong!" upon invocation.
- **Result:** Successful execution.

#### 2. Test: `test_help`

- **Purpose:** Evaluate the behavior of the `help` command.
- **Outcome:** Checks if the command generates an embedded response.
- **Result:** Successful execution with the expected embed title and description.

#### 3. Test: `test_changeLanguage`

- **Purpose:** Validates the `changeLanguage` command functionality.
- **Outcome:** Examines if the command sets the language to the provided input.
- **Result:** Successful execution with the title and description indicating language change.

#### 4. Test: `test_startVocabQuiz`

- **Purpose:** Tests the behavior of the `startVocabQuiz` command.
- **Outcome:** Verifies if the command initiates a Vocabulary Quiz with relevant details.
- **Result:** Successful execution with the expected quiz details.

#### 5. Test: `test_myScores`

- **Purpose:** Assesses the functionality of the `myScores` command.
- **Outcome:** Checks if the command generates user score-related data.
- **Result:** Successful execution with user-specific score information.

#### 6. `test_leaderboard`

- **Purpose:** Tests the 'Leaderboard' command.
- **Expected Outcome:** Expect a response in the form of an embed displaying the leaderboard.
- **Result:** Validates the title and description of the embedded message.

#### 7. `test_myProgress`

- **Purpose:** Tests the 'Myprogress' command.
- **Expected Outcome:** Expect a response in the form of an embed displaying the user's progress.
- **Result:** Validates the title and description of the embedded message.

### Known Problems
No known problems or failed tests were observed during the test execution.


## Test Report for test_helpcommand

### Purpose

This test suite aims to validate the functionality of miscellaneous commands within a Discord bot. It verifies the behavior of commands like `ping` and `echo`.

### 1. `test_ping`

- **Purpose:** Checks the functionality of the 'ping' command.
- **Outcome:** Verifies if the bot sends an embedded message with the title "Help Command Mock Data" upon receiving the `!ping` command.
- **Result:** Test passed successfully.

### 2. `test_echo`

- **Purpose:** Validates the 'echo' command functionality.
- **Outcome:** Tests if the bot responds with "Hello" after receiving the `!echo Hello world` command.
- **Result:** Test passed successfully.

### Known Problems

During the test execution, no known problems or failed tests were observed.


## Test Report for MatchResult Class

### Purpose

The test suite aims to validate the functionality of the `MatchResult` class for sentence matching.

### 1. `test_score`

- **Purpose:** Evaluate the sentence matching score.
- **Expected Outcome:** Compares the similarity between the expected sentence "how are you" and the actual sentence "how is it going."
- **Result:** The calculated score based on the matching similarity is printed.

### 2. `test_score_exactmatch`

- **Purpose:** Verifies the sentence matching score for an exact match.
- **Expected Outcome:** Compares the similarity between the expected sentence "today is hot" and the actual sentence "today is hot."
- **Result:** The calculated score for the exact matching sentences is printed.

### Known Problems

During the test execution, no known problems or failed tests were observed.


## Test Report for Voice Commands Testing

### Purpose

This test suite aims to validate the functionality of the voice-related commands within the `Voice` cog.

### 1. `test_ping`

- **Purpose:** Tests the 'ping' command.
- **Expected Outcome:** Sends a message "!ping" and expects a response containing "Pong!".
- **Result:** Verifies if the received message contains "Pong!".

### 2. `test_startVoiceQuiz_notinvc`

- **Purpose:** Tests the 'startVoiceQuiz' command when the user is not in a voice channel.
- **Expected Outcome:** Expect a message stating "You need to be in a voice channel to use this command."
- **Result:** Asserts that no voice clients exist and checks for the expected response message.

### 3. `test_startVoiceQuiz_invc`

- **Purpose:** Tests the 'startVoiceQuiz' command when the user is in a voice channel.
- **Expected Outcome:** Executes the command and checks if a voice client exists after execution.
- **Result:** Asserts the presence of voice clients after executing the command.

### Known Problems

During the test execution, no known problems or failed tests were observed.
