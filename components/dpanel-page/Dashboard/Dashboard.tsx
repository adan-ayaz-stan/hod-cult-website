import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./main.module.css";

function Dashboard(props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const data = props.userData;
  const balance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(data.balance.amount);
  console.log(balance);

  return (
    <div className={styles.main}>
      <h2>Dashboard</h2>

      <div className={styles.info_box}>
        <p>Name: {data.name}</p>
        <p>Rank: {data.rank}</p>
        <p>Cult Rank: {data.cult_rank}</p>
        <p>Balance: {balance}</p>
      </div>

      <div className={styles.mission_box}>
        <h2>Current Mission:</h2>
        <p>You have not been assigned any tasks yets.</p>
      </div>

      <div className={styles.news_box}>
        <h2>Latest News</h2>
        <div className={styles.news_box_entity}>
          {/* <h3>Bounty Placement</h3> */}
          <p style={{ color: "purple" }}>
            New Bounty Placement! $500,000.00 on the head of New Chief of Labour
            Division. Bounty lifetime extended till 1745 Hours.
          </p>
        </div>
        <div className={styles.news_box_entity}>
          {/* <h3>Bounty Placement</h3> */}
          <p style={{ color: "orange" }}>
            The Blood Moon Ring Artifact hits the Black Market.
          </p>
        </div>
        <div className={styles.news_box_entity}>
          {/* <h3>Bounty Placement</h3> */}
          <p style={{ color: "white" }}>
            New weapons arrival! Auction House begins in 9 hours.
          </p>
        </div>

        <div className={styles.news_box_entity}>
          {/* <h3>Bounty Placement</h3> */}
          <p>
            Bounty kill 'Lance Rosandale' for '$240,000.00' has been
            accomplished by [PRIVATE INFORMATION BY USER CONSENT].
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
