import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Nav from "../../components/nav";

export default function BlogTemplate({ content, data }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="main">
        <article>
          <h1>{data.title}</h1>
          <div>
            <ReactMarkdown source={content} />
          </div>
        </article>
      </main>

      <style jsx>{`
        .main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

BlogTemplate.getInitialProps = async function({ query }) {
  // query contains the slug param
  const { slug } = query;
  // grab the file in the posts dir based on the slug
  const markdownFile = await import(`../../posts/${slug}.md`);
  // also grab the config file so we can pass down siteTitle
  //gray-matter parses the yaml frontmatter from the md body
  const parsedMarkdown = matter(markdownFile.default);
  return {
    ...parsedMarkdown
  };
};
