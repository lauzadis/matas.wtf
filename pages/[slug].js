import Head from 'next/head'
import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import remarkGfm from 'remark-gfm'

function PostTemplate({ content, data }) {
  const frontmatter = data

  return (
    <div className={styles.container}>
      <Head>
        <title>matas.wtf</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <a href="/"><h2>matas.wtf; {frontmatter.title}?</h2></a>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} 
      components={{img:({node,...props})=><img style={{maxWidth:'100%'}}{...props}/>}} />
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query

  const content = await import(`../content/${slug}.md`)

  // parse frontmatter data
  const data = matter(content.default)

  return { ...data }
}

export default PostTemplate
