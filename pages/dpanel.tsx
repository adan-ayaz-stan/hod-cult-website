import { doc, getDoc } from "firebase/firestore";
import { verify } from "jsonwebtoken";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Dashboard from "../components/dpanel-page/Dashboard/Dashboard";
import Navbar from "../components/dpanel-page/Navbar/Navbar";
import { firestore } from "../firebase.config";

import styles from "../styles/dpanel.module.css";

interface PropsData {
  userData: {
    name: string;
  }
}

const DPanel: NextPage<PropsData> = (props) => {
  const data = props.userData;

  return (
    <div className={styles.main}>
      <Head>
        <title>DPANEL | {data.name}</title>
      </Head>

      <Navbar />

      <div className={styles.submain}>
        <div className={styles.sidebar}>
          <h2>White Board</h2>
          <ul>
            <li className={styles.active_li}>Dashboard</li>
            <li>Marketplace</li>
            <li>Bounty Hunting</li>
            <li>Contracts</li>
            <li>Store</li>
            <li>Auction House</li>
            <li>Information House</li>
            <li>Mercenary Point</li>
          </ul>
        </div>
        <Dashboard userData={data} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try {
    const cookie = context.req.cookies.usrdt;
    const validate = verify(cookie, "wepreachbeneaththestars");
    console.log(validate);
    const ref = doc(firestore, "users", validate);
    const data = await getDoc(ref);
    if (data.exists()) {
      return {
        props: {
          userData: data.data(),
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: "false",
        },
      };
    }
  } catch {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default DPanel;
