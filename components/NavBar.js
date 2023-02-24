import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();
    console.log(router);

    return (
        <nav>
            <Link href='/' legacyBehavior>
                <a className={router.pathname === '/'? 'active' : ''}>Home</a>
            </Link>
            <Link href='/about' className={router.pathname === '/about'? 'active' : ''}>
                About
            </Link>
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                .active {
                    color: tomato;
                }
            `}</style>
            {/* <Link href='/' legacyBehavior>
                <a className={[styles.link, router.pathname === '/'? styles.active : ''].join(' ')}>Home</a>
            </Link>
            <Link href='/about' className={`${styles.link} ${router.pathname === '/about'? styles.active : ''}`}>
                About
            </Link> */}
        </nav>
    )
}