import React from 'react';

function Component1(props, ref) {
  return (
    <div ref={ref}>
      <div style={{ height: '155rem', backgroundColor: 'blue' }}>content ourse</div>
    </div>
  );
}

const forwardedRef = React.forwardRef(Component1);
export default forwardedRef;
