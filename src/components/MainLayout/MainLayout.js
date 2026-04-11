import styles from "./styles.module.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from "react-router";

export default function MainLayout() { 
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}