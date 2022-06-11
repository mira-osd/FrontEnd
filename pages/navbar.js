import Link from "next/link";
import styles from "../assets/css/navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.center}>
            <div className={styles.nav}>
                <Link href="/">
                    <div className={styles.home} />
                </Link>
                <Link href="/gallery">
                    <div className={styles.gallery} />
                </Link>
                <Link href="/contact">
                    <div className={styles.contact} />
                </Link>
            </div>
        </div>
    );
}