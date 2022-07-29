import React, { useRef } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

export function Scroll() {
  const component1Ref = useRef(null);
  const component2Ref = useRef(null);

  const handleClick = (props) => {
    props.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={() => handleClick(component1Ref)}>Scroll to Component1 element</button>
      <button onClick={() => handleClick(component2Ref)}>Scroll to Component2 element</button>

      <div style={{ height: '155rem' }} />

      <Component1 ref={component1Ref} />
      <Component2 ref={component2Ref} />
    </div>
  );
}
