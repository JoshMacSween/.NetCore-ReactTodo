import React, { useState } from "react";
import Button from '../components/Button/Button'

export default function NameCard() {
  const [show, setShow] = useState(false);
  function expand() {
    setShow(!show);
  }
  return (
    <div>
      <h1>CSS Accordion</h1>
      <div className="accordion">
        <button onClick={expand} className={show ? "accordion-button accordion-button-active" : "accordion-button" } type="button">
          Expand-Content
        </button>
        <div className={show ? "accordionContent" : "accordionContentActive"}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            possimus cum tempora quos architecto voluptatibus.
          </p>
        </div>
          <Button label="Click Here Please"/>
      </div>
    </div>
  );
}
