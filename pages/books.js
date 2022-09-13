import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matas.wtf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="/"><h2>matas.wtf? books?</h2></a>
      <h3>a brief background</h3>
      <p>
        I used to love reading, my middle school had a 30 minute reading period every day.
        I enjoyed every second of it, and was often late to the following class because I couldn't stop reading
      </p>
      <p>
        in my last year, the school implemented Illinois' latest educational program called Independent Reading Level Assessment (IRLA).
        this mandated which books you could read (nothing too difficult!) and how much you read each day.
      </p>
      <p>
        we were given time-tracking sheets which were stamped for every 15 minutes we read our books. 
        each week, we had to have a discussion with the teacher summarizing what we've read. 
        if you couldn't summarize the book effectively enough, you were downgraded to a lower level, 
        and forced to read books which were "easier" to comprehend.
      </p>
      <p>
        these stamps were heavily policed -- during the period, the teacher would walk around and interrogate students about their missing stamps.
        needless to say, this didn't provide the perfect reading environment.
      </p>
      <p>
        this ultimate bureaucratization killed reading for me. I've only recently started again, slowly, over the past few years.
        using a Kindle was especially what drew me back in -- it is a great device for reading, and the Internet has just about any book you could want for free (but you didn't hear it from me).
      </p>
      <p>
        I also recommend Half Price Books and other used bookstores, they are often selling books at 25% to 50% the cost of a new one. 
        the only tradeoffs are slightly scuffed covers or a few creased pages.
      </p>
      <p>your local library is another great option, but I like to physically own the books I've read, it just does something for me.</p>

      <h3>books I've read, and a short blurb about each</h3>
      
    </div>
  )
}
