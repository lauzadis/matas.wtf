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
  const content = await import("../content/index.md")

  // parse frontmatter data
  const data = matter(content.default)

  return { ...data }
}

export default Home
