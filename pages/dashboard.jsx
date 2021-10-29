import Banner from "../components/dashboard/banner";
import DashboardHeader from "../components/dashboard/header";
import styles from "../styles/Dashboard.module.scss";

export default function Dashboard(){
    return (
        <div className={styles.dashboardFull}>
            <DashboardHeader />
            <div className={styles.dashboardContainer}>
                <Banner />
            </div>

        </div>
    )
}