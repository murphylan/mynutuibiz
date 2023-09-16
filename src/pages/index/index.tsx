import React, { useState } from "react";
import { Swiper, Image } from '@nutui/nutui-react-taro';
import './index.scss'

const Index = () => {
  const [initPage8, setInitPage8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <>
      <Swiper defaultValue={0} loop previousMargin="0px" nextMargin="0px">
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <Image src={item} width="100%" height="340rpx;" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </>
  )
}
export default Index;
