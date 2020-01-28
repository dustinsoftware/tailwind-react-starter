import React from 'react';
import styles from './App.module.css';

function App() {
  let [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/users')
      .then(x => x.json())
      .then(x => {
        setUsers(x.users);
      });
  }, []);

  let createUser = () => {
    fetch('/api/createUser', { method: 'POST' })
      .then(x => fetch('/api/users'))
      .then(x => x.json())
      .then(x => {
        setUsers(x.users);
      });
  };
  return (
    <div className="flex mb-4">
      <div className="w-full">
        <div
          className="max-w-md bg-white shadow-xl border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center"
          role="alert"
        >
          <strong className="m-1 flex-none font-bold">Hello!</strong>
          <span className="m-1 flex-1 block sm:inline">
            This is a test with Tailwind
          </span>
          <span className="m-1 flex-1 block sm:inline" data-testid="users">
            Users: {JSON.stringify(users)}
          </span>
          <button
            onClick={createUser}
            data-testid="ok-button"
            className={`m-1 flex-none ${styles.btn} ${styles.btnGreen}`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
