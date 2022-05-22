import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image
                        src="/images/telephone.png"
                        alt="telephone"
                        width="32"
                        height="32"
                    />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NUMBER</div>
                    <div className={styles.text}>0123456789</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/images/logo.png" alt="" width="160px" height="69px" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/images/cart.png" alt="" width="30px" height="30px" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
