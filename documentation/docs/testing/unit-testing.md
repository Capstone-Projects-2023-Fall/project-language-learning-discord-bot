---
sidebar_position: 1
---

# Unit Tests

## Database Component

**Method: test_findUser_not_found**
- **Purpose:** Verify `findUser` returns `None` for a non-existent user.
- **Input:** 'notfound' (String - non-existent user ID).
- **Input Type:** String
- **Expected Result:** `None`.
- **Expected Output Type:** `None` (No user object).

---

**Method: test_findUser_found**
- **Purpose:** Verify `findUser` retrieves existing user data.
- **Input:** 'user1' (String - existing user ID).
- **Input Type:** String
- **Expected Result:** User data with `_id` equal to 'user1'.
- **Expected Output Type:** Dictionary (user data).

---

**Method: test_insertUser**
- **Purpose:** Verify `insertUser` successfully inserts new user data.
- **Input:** User data with `_id` 'user2' (Dictionary - new user data).
- **Input Type:** Dictionary
- **Expected Result:** User data retrievable with `findUser`, `_id` equal to 'user2'.
- **Expected Output Type:** Boolean or Dictionary (confirmation of insertion or inserted user data).

---

**Method: test_changeLanguage**
- **Purpose:** Verify `changeUserLanguage` updates user's language preference.
- **Input:** 'user1', 'Spanish' (String - user ID and new language).
- **Input Type:** String, String
- **Expected Result:** User data shows updated language 'Spanish'.
- **Expected Output Type:** Dictionary (updated user data).

---

**Method: test_getQuizzes_no_record**
- **Purpose:** Verify `getQuizzes` returns empty when no quizzes in the specified language.
- **Input:** 'a_language' (String - no quizzes).
- **Input Type:** String
- **Expected Result:** Empty list.
- **Expected Output Type:** Array (empty array indicating no quizzes).

---

**Method: test_getQuizzes_has_record**
- **Purpose:** Verify `getQuizzes` retrieves quizzes in the specified language.
- **Input:** 'Spanish' (String - language with quizzes).
- **Input Type:** String
- **Expected Result:** List with quizzes.
- **Expected Output Type:** Array of JSON Objects (quiz data with properties `questions`, `answers`, etc.).

---

**Method: test_getRandomQuiz_no_record**
- **Purpose:** Verify `getRandomQuiz` returns `None` when no quiz in language.
- **Input:** 'a_language' (String - no quizzes).
- **Input Type:** String
- **Expected Result:** `None`.
- **Expected Output Type:** `None` (No quiz object).

---

**Method: test_getRandomQuiz_has_record**
- **Purpose:** Verify `getRandomQuiz` retrieves a quiz in the specified language.
- **Input:** 'Spanish' (String - language with quizzes).
- **Input Type:** String
- **Expected Result:** Non-`None` quiz object.
- **Expected Output Type:** JSON Object (quiz data with properties `questions`, `answers`, etc.).

---

**Method: test_updateUserQuiz**
- **Purpose:** Verify `updateUserQuiz` updates user's quiz records.
- **Input:** 'user1', quiz data with score 20 (String - user ID and Dictionary - quiz data with score).
- **Input Type:** String, Dictionary
- **Expected Result:** User's `totalScore` updated to 20.
- **Expected Output Type:** Dictionary (updated user data with new `totalScore`).

---

## Bot Component

**Method: test_help**
- **Purpose:** Verify that the `!help` command generates the expected help message embed.
- **Input:** Sending the message "!help" to the bot (String - help command message).
- **Input Type:** String
- **Expected Result:** An embed with title "Help command for Language Bot" and description "All commands for the bot."
- **Expected Output Type:** Embed object (help message embed).

---

**Method: test_changeLanguage**
- **Purpose:** Verify that the `!changeLanguage` command correctly changes the language and produces the expected response embed.
- **Input:** Sending the message "!changeLanguage Spanish" to the bot (String - change language command message).
- **Input Type:** String
- **Expected Result:** An embed with title "Language changed" and description "Language set to Spanish."
- **Expected Output Type:** Embed object (confirmation message embed).

---

**Method: test_startVocabQuiz**
- **Purpose:** Verify that the `!startVocabQuiz` command initiates a vocabulary quiz with the correct title and description.
- **Input:** Sending the message "!startVocabQuiz" to the bot (String - start vocab quiz command message).
- **Input Type:** String
- **Expected Result:** An embed with title "Vocabulary Quiz - Spanish" and description "Get ready to test your vocabulary!"
- **Expected Output Type:** Embed object (quiz initiation message embed).

---

**Method: test_myScores**
- **Purpose:** Verify that the `!myScores` command retrieves and displays the user's score correctly.
- **Input:** Sending the message "!myScores" to the bot (String - my scores command message).
- **Input Type:** String
- **Expected Result:** An embed with title "User score" and description "Your all score."
- **Expected Output Type:** Embed object (user score message embed).

---
