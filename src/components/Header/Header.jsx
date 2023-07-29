import React from "react";
import styles from "./Header.module.css";
import logo from '../../icons/logo.svg';
import { ReactComponent as Search } from '../../icons/search.svg';
import { ReactComponent as Cart } from '../../icons/cart.svg';
import { ReactComponent as Moon } from '../../icons/moon.svg';
import { ReactComponent as Sun } from '../../icons/sun.svg';





function NavItem( { item } ) {
  return (
    <>
      <li className={styles.nav_item}>
        <a className={styles.nav_link} href="#">{item}</a>
      </li>
    </>
  )
}

export default function Header() {
  return (
     <>
      <header className={styles.site_header}>
        <div className={styles.header_container}>


          {/* <!-- navbar-menu --> */}
          <nav className={styles.navbar_menu}>
            <ul className={`${styles.nav_list} ${styles.site_menu_list}` }>
              <NavItem item="男款"/>
              <NavItem item="女款" />
              <NavItem item="最新消息" />
              <NavItem item="客製商品" />
              <NavItem item="聯絡我們" />
            </ul>

            
              <a href="#" className={styles.logo_container}>
                <img src={logo} alt="" />
              </a>


            <ul className={`${styles.nav_list} ${styles.site_action_list}`}>

              {/* <!-- search --> */}
              <li className={styles.nav_item}>
                <Search className={styles.icon}/>
              </li>

              {/* <!-- cart --> */}
              <li className={styles.nav_item}>
                <Cart className={styles.icon}/>
              </li>

              {/* <!-- moon --> */}
              <li id="theme-toggle" className={styles.nav_item}>
                <Moon className={styles.icon}/>

                {/* <!-- Sun --> */}
                {/* <Sun /> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>

     </>
  )
}