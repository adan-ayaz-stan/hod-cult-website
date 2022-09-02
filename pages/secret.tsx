import { verify } from "jsonwebtoken";
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Heading from "../components/secret-page/Heading/Heading";

const Secret: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3em",
        fontFamily: "Montserrat",
      }}
    >
      <Head>
        <title>LOGIN SECRET PASS</title>
        <meta
          name="description"
          content="A Cult Application from Imagination"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookie = context.req.cookies.scrt;
    const validate = verify(`${cookie}`, "wepreachbeneaththestars");
    if (validate) {
      return {
        props: {},
      };
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Secret;
