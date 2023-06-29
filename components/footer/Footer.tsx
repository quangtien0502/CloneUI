import React from "react"
import styles from "./Footer.module.css"
import Image from "next/image"
import { COLOR_WHITE } from "../constants/style-constants"
import { LIST_KEYWORDS, LIST_MENU } from "./constants"
import { Col, Row } from "antd"
export interface FooterProp {}

export default function Footer(props: FooterProp) {
  const logo = (url: string) => (
    <Image alt="/" src={url} width={35} height={35} />
  )

  const qr = (url: string, txt: string) => (
    <div className={styles.singleQr}>
      <Image alt="/" src={url} width={115} height={115} />
      <p style={{ color: COLOR_WHITE }} className={styles.qrText}>
        {txt}
      </p>
    </div>
  )

  const downloadButton = (txt: string) => (
    <button className={styles.btnDownload}>
      <p style={{ color: COLOR_WHITE }}>{txt}</p>
      <Image
        alt="/"
        src={"/download.png"}
        width={20}
        height={20}
        style={{ marginLeft: "10px" }}
      />
    </button>
  )

  return (
    <div className={styles.footer}>
      <div className={styles.vieclam_container}>
        <div className={styles.footer_left}>
            <ul className={styles.foot_hid}>
              
              <li className={styles.list}>
                  <span>Đơn vị chủ quản</span>
                  <br />
                  "Công ty cổ phần thanh toán Hưng Hà"
              </li>
              <li className={styles.list}>
                "VP1: "
                <a >Tầng 4, B50,Lô 6,KĐT Định Công - Hoàng Mai - Hà Nội </a>
              </li>
              <li className={styles.list}>
                VP2: Thôn Thanh Miếu,Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên
              </li>
              <li className={styles.list}>
                VP3: Tầng 2,Số 1 đường Trần Nguyên Đán,Khu Đô Thị Định Công, Hoàng Mai, Hà Nội
              </li>
              <li className={styles.list}>
                <span>Hotline:</span>
                "0982.079.209"
              </li>
              <li className={styles.list}>
                <span>
                Email hỗ trợ:
                </span>
                timviec365.vn@gmail.com

              </li>
              
            </ul>
            <ul className={styles.foot_show}>
              
              <li className={styles.list}>           
                  <a >Giới thiệu chung</a>
                </li>
                <li className={styles.list}>
                  <a >Thông tin cần biết</a>
                </li>
                <li className={styles.list}>
                  <a >Thỏa thuận sử dụng</a>
                </li>
                <li className={styles.list}>
                  <a>Sơ đồ website</a>
                </li>
              
            </ul>
            <ul className={styles.foot_show}>
              
              <li className={styles.list}>
                <a>Quy định bảo mật</a>
              </li>
              <li className={styles.list}>
                <a>Quy định giải quyết tranh chấp</a>
              </li>
              
              
              
              
              
            </ul>
        </div>
        <div className={styles.footer_right}>

        </div>
        <div className={styles.foot_bot}>

        </div>
        <div className={styles.link_mxh}>

        </div>

      </div>
      
    </div>
  )
}
