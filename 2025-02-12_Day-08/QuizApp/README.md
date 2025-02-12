# Instructions: Quiz App

**Features & Requirements**

1. **Create an HTML structure:**

   - A question display area.
   - Answer choices as buttons.
   - A "Next Question" button.
   - A score display at the end.

2. **Define a `Question` interface in TypeScript:**

   - `question`: `string`
   - `choices`: `string[]`
   - `correctAnswer`: `string`

3. **Create a `Quiz` class:**

   - Holds an array of `Question` objects.
   - Keeps track of the current question index.
   - Evaluates user responses.
   - Shows the final score at the end.

4. **Implement event listeners:**

   - Users click an answer button to proceed.
   - Correct answers increase the score.
   - The next question appears after answering.

5. **Use TypeScript for better type safety.**
