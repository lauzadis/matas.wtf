import Head from 'next/head'
import styles from '../styles/Home.module.css'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Home({ content, data }) {  
  return (
    <div className={styles.container}>
      <Head>
        <title>matas.wtf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactMarkdown children={content}></ReactMarkdown>
    </div>
  )
}

Home.getInitialProps = async (context) => {
  const content = `
I made this website to post information about myself and some of my most interesting projects. I hope to help by sharing with others

### projects
[robot arm](./arm)

[fpv drone](./fpv)

[electric bicycle](./ebike)

[James Webb Space Telescope Twitter bot](./jwst)

### about me

[github]("https://github.com/lauzadis")

[linkedin]("https://linkedin.com/in/matas-lauzadis")

[resume]("/static/resume")
`

  return { content }
}

export default Home
