import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import { url } from "inspector"
import { Button, Row, Col } from "antd"
import { COLOR_WHITE, HEAVY_BLUE } from "../constants/style-constants"



export interface HeaderProp {}

const LIST_TITLE = [
  {
    url: "",
    title: "Trang lương 365"
  },
  {
    url: "",
    title: "Tin tức"
  },
  
 
]

const headerLink = (url: string, title: string, index: number) => (
  <div className={styles.singleLink} key={index}>
    <a href={url}>{title}</a>
  </div>
)

export default function Header() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.leftHeader}>
          <Image alt="/" src={"/logo.png"} width={137} height={29} />
          
        </div>
        <div className={styles.rightHeader}>
          {LIST_TITLE.map((item, index) =>
            headerLink(item.url, item.title, index)
          )}
          
          <Button
            style={{
              backgroundColor: HEAVY_BLUE,
              border: "none",
              marginRight: "25px",
              marginLeft: "25px"
            }}
          >
            <span style={{ color: COLOR_WHITE }}>Đăng nhập/Đăng ký</span>
          </Button>
          
        </div>
        
      </div>
      {/* banner */}
      {/* <Banner /> */}
    </>
  )
}
