import Hero from "../components/Hero";
import Image from "next/image";
import Map from "../components/Map";
import styles from "../styles/Home.module.css";
import { getCities } from "../utils/fetch";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section>
          <Map />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <Hero />
    </div>
  );
}
