import BookList from './BookList'
import styles from './page.module.css'

export default async function Home() {
  return (
    <main className={styles.main}>
        {/* <h1 className="text-3xl font-bold">Welcome to the Star Wars API</h1>
        <span>start exploring !</span> */}
        <BookList/>
    </main>
  )
}
