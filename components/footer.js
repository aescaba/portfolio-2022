// https://j471n.in/blogs/portfolio-tutorial#creating-layout

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <div>
        <a className=""
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      </div>
    );
}