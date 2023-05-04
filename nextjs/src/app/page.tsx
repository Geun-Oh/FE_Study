import styles from './page.module.css'
import Link from 'next/link'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='test'>MainPage</Link>
    </main>
  )
}
