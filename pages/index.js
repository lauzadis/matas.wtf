import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matas.wtf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="/"><h2>matas.wtf?</h2></a>
      <p>I made this website to list some of my most interesting projects and help by sharing with others</p>
      <p> key features of the site </p>
      <ul>
        <li>software</li>
        <li>hardware</li>
        <li>sometimes both</li>
        <li>lots of love</li>
      </ul>

      <h3>projects</h3>
      <ul>
        <li><a href="./ebike">electric bicyle</a></li>
        <li><a href="./jwst">James Webb space telescope bot</a></li>
      </ul>

      <h3>about</h3>
      <ul>
        <li><a href="https://github.com/mataslauzadis">github</a></li>
        <li><a href="https://linkedin.com/in/matas-lauzadis">linkedin</a></li>
        <li><a href="/resume.pdf">resume</a></li>
      </ul>
    </div>
  )
}
