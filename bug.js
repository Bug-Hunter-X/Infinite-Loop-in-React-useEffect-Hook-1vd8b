```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the count is always changing
    setCount(count + 1);
  }, [count]); // This dependency array is the culprit

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```