import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import battery_bms from '../public/ebike/battery_bms.JPG';
import battery_complete from '../public/ebike/battery_complete.JPG';
import battery_charging from '../public/ebike/battery_charging.JPG';
import checking_voltage from '../public/ebike/checking_voltage.JPG';
import outdoors from '../public/ebike/outdoors.JPG';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matas.wtf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="/"><h2>matas.wtf? a bot tracking the James Webb space telescope?</h2></a>
      <p>I like space, and when the James Webb space telescope launched in 2022, I was fascinated with the fact that it was constantly changing observation targets</p>
      <p>astronomers have a time-sharing system where they submit observation proposals which are then reviewed and approved based on scientific impact</p>
      <p>I found the observation schedules online, but they were in a really brutish format -- not very readable!</p>
      <p>so, I made a Python bot which fetches these schedules, parses them, and then constantly queries for new observation events</p>
      <p>assuming the schedules are accurate, it will post a tweet in real-time when the telescope begins observing a new target</p>
      <p>I am happy to help bring these updates to a broader community -- and hopefully it excites more people about the science being done in real-time here!</p>

      <a href="https://github.com/mataslauzadis/JWST-Observations">github repository</a><br></br>

      <a href="https://twitter.com/JWSTObservation">twitter bot</a>

    </div>
  )
}
