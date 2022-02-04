import React, {useEffect, useState} from 'react';

function ServerTest() {
  const [serverState, setServerState] = useState('unavailable');
  function callAPI() {
    fetch("/test")
      .then(res => res.text())
      .then(res => setServerState(res));
  }

  useEffect(() => {
    callAPI()
  }, []);

  return (
    <div>
      Server is now:
      <p>{serverState}</p>
    </div>
  )
}

export default ServerTest;
