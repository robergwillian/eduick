import styles from "./styles.module.scss";

export default function Banner() {
    return (

        <div className={styles.bannerWrapper}>
            <div className={styles.fireDetail}>
                <img src="fire-detail.png" alt="fire detail" />
            </div>
            <div className={styles.bannerText}>
                <p>Hello <span>Student</span><i>.</i></p>
                <p>Whether you are a student trying to find your ideal private language teachers/tutors</p>
            </div>

            <div className={styles.bannerStudents}>
                <img src="students.png" alt="Drawing of students" />
            </div>
        </div>

    )
}