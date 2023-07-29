import React from "react";
import styles from "./Footer.module.css";
import logo from '../../icons/logo.svg';
import { ReactComponent as Facebook } from '../../icons/facebook.svg';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as Whatsapp } from '../../icons/whatsapp.svg';



const footerData = [
    { 
      id: 1,
      title: '客戶服務',
      links:[
        { title: '運送說明'},
        { title: '退換貨相關' },
        { title: '付款資訊' },
        { title: 'FAQ' },
      ]
    },{
      id: 2,
      title: '關於我們',
      links: [
        { title: '品牌故事' },
        { title: '媒體聯繫' },
        { title: 'Press kit' },
      ]
    },{
      id: 3,
      title: '資訊',
      links: [
        { title: '隱私權政策' },
        { title: 'Cookie' },
        { title: 'GDPR' },
      ]
    },

]

function FooterSection( { datas } ) {
    return (
      datas.map(data => (
        <section key={data.id} className={styles.footer_section}>
          <h2 className={styles.section_title}>{data.title}</h2>
          <div className={styles.section_content}>
            {data.links.map((link) => (
              <a className={styles.page_link} key={link.title}  href="#">{link.title}</a>
            ))}
          </div>
        </section>
      ))
    )
}

export default function Footer() {
    return (
      <>
        <footer className={styles.site_footer}>
          <div className={styles.footer_container}>
            <section className={styles.footer_section}>
              <div className={styles.footer_logo_container}>
                <img src={logo} />
              </div>
            </section>

            <FooterSection datas={footerData} />

            {/* <section class="footer-section">
              <h2 class="section-title">客戶服務</h2>
              <div class="section-content">
                <a class="page-link" href="#">運送說明</a>
                <a class="page-link" href="#">退換貨相關</a>
                <a class="page-link" href="#">付款資訊</a>
                <a class="page-link" href="#">FAQ</a>
              </div>
            </section>
            <section class="footer-section">
              <h2 class="section-title">關於我們</h2>
              <div class="section-content">
                <a class="page-link" href="#">品牌故事</a>
                <a class="page-link" href="#">媒體聯繫</a>
                <a class="page-link" href="#">Press kit</a>
              </div>
            </section>
            <section class="footer-section">
              <h2 class="section-title">資訊</h2>
              <div class="section-content">
                <a class="page-link" href="#">隱私權政策</a>
                <a class="page-link" href="#">Cookie</a>
                <a class="page-link" href="#">GDPR</a>
              </div>
            </section> */}

            <section className={styles.footer_section}>
              <h2 className={styles.section_title}>追蹤 ALPHA Shop</h2>
              <div className={styles.section_content}>
                <div className={styles.tel_info}>+886 02123-45678</div>
                <div className={styles.social_icon_group}>
                  <Facebook  />
                  <Instagram />
                  <Whatsapp  />
                </div>
              </div>
            </section>
          </div>
        </footer>
      </>
    )
}
