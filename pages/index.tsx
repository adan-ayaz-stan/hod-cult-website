import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import styles from "../styles/index.module.css";

import { GiDoorway, GiTempleDoor } from "react-icons/gi/index";

import Navbar from "../components/index-page/Navbar/Navbar";
import Heading from "../components/index-page/Heading/Heading";
import { useRecoilValue } from "recoil";
import { preRequisteDone } from "../atoms/login-prerequiste";

const Home: NextPage = () => {
  const preRequisteRecoilValue = useRecoilValue(preRequisteDone);

  return (
    <div className={styles.main}>
      <Head>
        <title>HoD</title>
        <meta
          name="description"
          content="A Cult Application from Imagination"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.submain}>
        <Heading />
        <a href="/register" className={styles.register_button}>
          Register Now
        </a>
      </main>

      <div className={styles.login}>
        {preRequisteRecoilValue == true ? (
          <a href="/login">
            <GiTempleDoor
              style={{ height: "40px", width: "40px", cursor: "pointer" }}
            />
          </a>
        ) : (
          <GiDoorway style={{ height: "40px", width: "40px" }} />
        )}
      </div>
    </div>
  );
};

export default Home;
