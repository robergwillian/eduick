import { Pagination } from "@material-ui/lab";
import Banner from "../components/dashboard/banner";
import CourseCard from "../components/dashboard/courseCard";
import Footer from "../components/dashboard/footer";
import DashboardHeader from "../components/dashboard/header";
import styles from "../styles/Dashboard.module.scss";

export default function Dashboard() {
  return (
      <>
    <div className={styles.dashboardFull}>
      <DashboardHeader />
      <div className={styles.dashboardContainer}>
        <Banner />
      </div>

      <div className={styles.courseContainer}>
        <CourseCard title="Master English: Improve Your Speech" />
        <CourseCard title="Domine o Inglês: Melhore a Sua Fala" />
        <CourseCard title="Domina el inglés: mejora tu habla" />
        <CourseCard title="Master in inglese: migliora il tuo discorso" />
        <CourseCard title="マスター英語：あなたのスピーチを改善する" />
        <CourseCard title="Englisch meistern: Verbessern Sie Ihre Sprache" />
        <CourseCard title="Maîtrisez l'anglais : améliorez votre élocution" />
        <CourseCard title="İngilizcede Ustalaşın: Konuşmanızı Geliştirin" />
        <CourseCard title="Овладейте английским: улучшите свою речь" />
        <span>
          <Pagination
            count={3}
            color="primary"
            hideNextButton={true}
            hidePrevButton={true}
          />
        </span>
      </div>
    </div>
      <Footer />
      </>
  );
}
