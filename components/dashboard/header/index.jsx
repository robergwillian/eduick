import styles from "./styles.module.scss";

export default function DashboardHeader(){
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src="logo.svg" alt="EDUICK LOGO" />
                    </a>

                    <nav>
                        My Classes
                    </nav>
                </div>
                <div className={styles.headerProfile}>
                    <button>
                        CHANGE TO TEACHER MODE
                    </button>
                    <div className={styles.profile}>
                        <a href="#">
                            <img src="avatar.png" alt="User avatar" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}