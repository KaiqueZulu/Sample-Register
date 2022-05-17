/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";
import ActiveLink from "../ActiveLink";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <Link href="/" passHref={true}>
            <img src="/images/logo.png" alt="Logo Meu Board" />
          </Link>
        </div>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/register" activeClassName={styles.active}>
            <a>Cadastrar</a>
          </ActiveLink>
          <ActiveLink href="/search" activeClassName={styles.active}>
            <a>Buscar Amostras</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
