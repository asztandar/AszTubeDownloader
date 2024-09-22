import Image from "next/image";
import styles from "./page.module.css";
import Potato from "../../public/assets/potato.png";
import Youtube from "../../public/assets/youtube.webp";
import Form from "./components/Form/Form";
export default function Home() {
  return (
    <main className={styles.main}>
        <section className={styles.left}>
            <div className={styles.left_youtube}>
              <p>Pobieraj z&nbsp;</p>
              <Image src={Youtube} alt="logo youtube" width={150} height={50} />
            </div>
            <div>
              <Form />
            </div>
        </section>
        <section className={styles.right}>
          <Image src={Potato} alt="pobieraj z youtube" width={500} height={500}/>
        </section>
    </main>
  );
}
