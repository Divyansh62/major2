import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<button className={styles.white_btn} onClick={handleLogout}>
					<h1>Logout</h1>
				</button>
			</nav>
		</div>
	);
};

export default Main;