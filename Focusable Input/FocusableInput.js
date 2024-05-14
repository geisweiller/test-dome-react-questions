import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const FocusableInput = (props) => {
  const inputRef = useRef(null)
  const { shouldFocus } = props;

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus])


  return <input ref={inputRef} />;
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML), 300);