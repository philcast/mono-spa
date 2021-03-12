import React from 'react';
import AppLayout from './AppLayout';

const ClosedApp: React.FC = () => {
  const onCloseClicked = React.useCallback(() => {
      window.top?.close();
    }, []);
  return (
    <AppLayout>
      <p>
        You are already working in another active application instance.
      </p>
      <p>
        Please close this browser tab and switch back to the active instance.
      </p>
      <button className="App-button" onClick={onCloseClicked}>
          Close
      </button>
    </AppLayout>
  )
};

export default ClosedApp;
