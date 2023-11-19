import React, { useState } from "react";
import styles from "./studio.module.css";
import Sidebar from "@/app/ui/sidebar/Sidebar";
import NavigationBar from "@/app/ui/navigation/NavigationBar";
import Canvas from "@/app/ui/canvas/Canvas";
import ActionBar from "@/app/ui/action_bar/ActionBar";

const Studio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.wrapper}>
      {/* sidebar */}
      <aside
        className={`${styles.sidebar__wrapper} ${
          sidebarOpen ? styles.open : styles.close
        } `}
      >
        <Sidebar />
      </aside>

      <section className={`${styles.main__section__wrapper}`}>
        {/* toggle button */}
        <div className={styles.sidebar__toggle} onClick={toggleSidebar}>
          <span>
            {sidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 19.92L8.48003 13.4C7.71003 12.63 7.71003 11.37 8.48003 10.6L15 4.08002"
                  stroke="#a1a1a1"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M8.90997 20.1183L15.43 13.5983C16.2 12.8283 16.2 11.5683 15.43 10.7983L8.90997 4.27826"
                  stroke="#a1a1a1"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        {/* navbar */}
        <NavigationBar />

        {/* main content */}
        <main className={styles.main__container}>
          {/* drag and drop canvas  */}
          <Canvas />

          {/* action bar */}
          <ActionBar />
        </main>
      </section>
    </div>
  );
};

export default Studio;
