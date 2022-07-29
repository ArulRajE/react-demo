import React from 'react';

function Component2(props, ref) {
  return (
    <div ref={ref}>
      <div style={{ height: '155rem', backgroundColor: 'green' }}>content</div>
    </div>
  );
}

const forwardedRef = React.forwardRef(Component2);
export default forwardedRef;
