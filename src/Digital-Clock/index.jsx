import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function DigitalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update the time
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Run the update function every second
    const timer = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Link to="/" className={styles.homeLink}>
        Home
      </Link>
      <div id="clock-container" className={styles.clockContainer}>
        <div id="clock" className={styles.clock}>
          {time || "00:00:00"}
        </div>
      </div>
    </>
  );
}
