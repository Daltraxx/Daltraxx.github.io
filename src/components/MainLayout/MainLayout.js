import styles from "./MainLayout.module.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function MainLayout() { 
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Main content goes here */}
      </main>
      <Footer />
    </>
  )
}