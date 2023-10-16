---
sidebar_position: 1
---

# Unit tests

## Class: TestDatabase

**Method: test_findUser_not_found**
- **Purpose:** Verify `findUser` returns `None` for a non-existent user.
- **Input:** 'notfound' (non-existent user).
- **Expected Result:** `None`.

---

**Method: test_findUser_found**
- **Purpose:** Verify `findUser` retrieves existing user data.
- **Input:** 'user1' (existing user).
- **Expected Result:** User data with `_id` equal to 'user1'.

---

**Method: test_insertUser**
- **Purpose:** Verify `insertUser` successfully inserts new user data.
- **Input:** User data with `_id` 'user2'.
- **Expected Result:** User data retrievable with `findUser`, `_id` equal to 'user2'.

---

**Method: test_changeLanguage**
- **Purpose:** Verify `changeUserLanguage` updates user's language preference.
- **Input:** 'user1', 'Spanish'.
- **Expected Result:** User data shows updated language 'Spanish'.

---

**Method: test_getQuizzes_no_record**
- **Purpose:** Verify `getQuizzes` returns empty when no quizzes in specified language.
- **Input:** 'a_language' (no quizzes).
- **Expected Result:** Empty list.

---

**Method: test_getQuizzes_has_record**
- **Purpose:** Verify `getQuizzes` retrieves quizzes in specified language.
- **Input:** 'Spanish' (language with quizzes).
- **Expected Result:** List with quizzes.

---

**Method: test_getRandomQuiz_no_record**
- **Purpose:** Verify `getRandomQuiz` returns `None` when no quiz in language.
- **Input:** 'a_language' (no quizzes).
- **Expected Result:** `None`.

---

**Method: test_getRandomQuiz_has_record**
- **Purpose:** Verify `getRandomQuiz` retrieves quiz in specified language.
- **Input:** 'Spanish' (language with quizzes).
- **Expected Result:** Non-`None` quiz object.

---

**Method: test_updateUserQuiz**
- **Purpose:** Verify `updateUserQuiz` updates user's quiz records.
- **Input:** 'user1', quiz data with score 20.
- **Expected Result:** User's `totalScore` updated to 20.

---
