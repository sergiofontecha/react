import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import thumbsUp from './assets/thumbsUp.svg';

// Create a root element to render the app. Reacrt needs a wrapper to use as a DOM element
const root = createRoot(document.getElementById('root'))

// Create a button component to be rendered
export const Button = ({ text }) => {
  return (
    <button>
      <img src={thumbsUp} alt="thumbs up" />
      {text}
    </button>
  )
}

// Render component inside the Created DOM(<Button text="Click me" />)
root.render(
  // Fragment is a wrapper to group multiple elements without adding an extra node (div for example) to the DOM
  <Fragment>
    <Button text="Click me" />
    <Button text="Click me too" />
    <Button text="Click me three" />
  </Fragment>
)
