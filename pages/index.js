import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Tim's Internet Home</h1>
      <p className="description">I wish you the best</p>
      <div className="row">
        <Link href="/about">
          <a className="card">
            <h3>About</h3>
            <p>Some info about me</p>
          </a>
        </Link>
        <Link href="/contact">
          <a className="card">
            <h3>Contact</h3>
            <p>Get in contact with me</p>
          </a>
        </Link>
        <Link href="/blog">
          <a className="card">
            <h3>Writing</h3>
            <p>Do I have anything interesting to say? Probably not.</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
