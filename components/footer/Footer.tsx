import React from "react"
import styles from "./Footer.module.css"
import Image from "next/image"
import { COLOR_WHITE } from "../constants/style-constants"
import { LIST_KEYWORDS, LIST_MENU } from "./constants"
import { Col, Row } from "antd"
import { url } from "inspector"
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
              
              <li className={styles.non_display}>
                  <span style={{fontSize:"14px"}}>Đơn vị chủ quản</span>
                  <br />
                  <p style={{fontSize:"22px"}}>Công ty cổ phần thanh toán Hưng Hà </p>
              </li>
              <div className={styles.flex}>
              <div>
              <Image
                  alt="/"
                  src={"/Building.png"}
                  width={30}
                  height={30}
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <div>
              <li className={styles.non_display} style={{padding: "5px 0px 5px 0px"}}>
                
                <a >VP1: Tầng 4, B50,Lô 6,KĐT Định Công - Hoàng Mai - Hà Nội </a>
              </li>
              <li className={styles.list} style={{paddingLeft:"0px"}}>
                VP2: Thôn Thanh Miếu,Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên
              </li>

              <li className={styles.list} style={{paddingLeft:"0px", paddingBottom:"5px" }}>
                VP3: Tầng 2,Số 1 đường Trần Nguyên Đán,Khu Đô Thị Định Công, Hoàng Mai, Hà Nội
              </li>
              </div>
              </div>
              
              <div className={styles.flex}>
                <div>
                  <Image
                  alt="/"
                  src={"/Hotline.png"}
                  width={30}
                  height={30}
                  style={{ marginLeft: "10px" }}
                />
                </div>
                <div>
                  <li className={styles.non_display2} style={{padding: "5px 0 5px 0px" ,}}>
                  <span>Hotline: 0982.079.209</span>
                
              </li>
                </div>
              </div>

              <div className={styles.flex}>
                <div>
                <Image
                  alt="/"
                  src={"/Email.png"}
                  width={30}
                  height={30}
                  style={{ marginLeft: "10px" }}
                />
                </div>
                <div>
                  <li className={styles.non_display3} style={{padding: "7px 0 5px 0px" }}>
                    <span>
                    Email hỗ trợ: timviec365.vn@gmail.com
                    </span>
                  

                    </li>
                </div>
              </div>
              
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
              <li className={styles.dcma_icon}>
                <p className={styles.btc_icon}>
                  <a className={styles.abc}>

                  </a>
                  <a className={styles.abc}>
                    
                  </a>
                </p>

              </li>
              
              
              
              
              
            </ul>
        </div>
        <div className={styles.footer_right}>
           <div className={styles.footer_right_left}>
              <div className={styles.footer_right_top}>
                  <p className={styles.footer_right_top_p}>Tải app để tìm việc làm siêu tốc</p>
                  <p className={styles.footer_right_top_p}>Tạo CV đẹp với 365+ mẫu CV xin việc</p>                  
              </div>
              <div className={styles.qr_cv}>
              <Image
                  alt="/"
                  src={"/qr.png"}
                  width={112}
                  height={112}
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <div className={styles.qr_cv}>
              <Image
                  alt="/"
                  src={"/qr.png"}
                  width={112}
                  height={112}
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <div className={styles.qr_cv}></div>
              <div className={styles.footer_right_bot}></div>
              <div className={styles.footer_right_bot} style={{textAlign:"center"}}></div>
           </div>

        </div>
        <div className={styles.foot_bot}>

        </div>
        <div className={styles.link_mxh}>

        </div>

      </div>
      
    </div>
  )
}
