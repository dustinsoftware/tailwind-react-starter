import React from 'react';
import styles from './App.module.css';

function App() {
	let [users, setUsers] = React.useState([]);
	React.useEffect(() => {
		fetch('/api/hello')
			.then(x => x.json())
			.then(x => {
				setUsers(x.users);
			});
	}, []);
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
						Users: {users.length}
					</span>
					<button className={`m-1 flex-none ${styles.btn} ${styles.btnGreen}`}>
						OK
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
