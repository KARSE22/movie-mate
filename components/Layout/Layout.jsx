import Link from "next/link";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.header__title}>Movie Mate</h1>
        </Link>
      </header>
      {children}
    </>
  );
}
