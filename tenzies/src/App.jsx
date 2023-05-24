import "./App.css";
import Dice from "../src/Components/Dice";

/**
 * Challenge:
 *
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

function App() {
  return (
    <>
      <main>
        <div className="dice--container">
          <Dice value={3} />
          <Dice value={6} />
          <Dice value={2} />
          <Dice value={3} />
          <Dice value={3} />
          <Dice value={1} />
          <Dice value={3} />
          <Dice value={5} />
          <Dice value={3} />
          <Dice value={4} />
        </div>
      </main>
    </>
  );
}

export default App;
