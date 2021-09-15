import React from 'react';
import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';
import styles from './styles.module.scss';
// import avatar from '../../../assets/images/avatar.webp';
import wangcun from '../../../assets/images/wangcun.jpg';
import Paragraph from '../../../components/Paragraph';
import HighLight from '../../../components/HighLight';
import useLottie from '../../../hooks/useLottie';

const cubeLottie = 'https://assets9.lottiefiles.com/private_files/lf30_ijlzmjq6.json';

const Profile = () => {
  const cubeRef = useLottie(cubeLottie);

  return (
    <Row gutter={36} className={styles.profile}>
      <Col lg={{ span: 11, order: 1 }} span={24} order={3} className={styles.details}>
        <Fade bottom>
          <Paragraph>
            一条 <HighLight>前端开发</HighLight> ，山东青岛 👴，现在在 <HighLight>时速云 @ 北京</HighLight> 搬砖。
          </Paragraph>
          <Paragraph>
            高考之后，飞去 <HighLight>中国矿业大学 @ 徐州</HighLight> 上了 4 年本科，外加3年研究生。
            刷了不少 LeetCode、掉了不少头发、去过不少地方，感叹过世界之大。
          </Paragraph>
        </Fade>

        <div className={styles.lottie} ref={cubeRef} />

        <Fade bottom>
          <Paragraph>
            经常天马行空想一些沙雕 idea，然后实现出来 🌟。偶尔累了就玩会80后FC小游戏 🎸，或者畅游 <HighLight>A股</HighLight> 的鱼塘 🎮。
            喜欢好看，酷炫的东西，可能这就是喜欢前端的原因吧 @_@。
            以前会折腾很多东西，比如 Vim、五笔打字、魔方...... 现在嘛，还是打打游戏，睡睡觉舒服 🤪。
          </Paragraph>
          <Paragraph>🐸 冲！</Paragraph>
        </Fade>
      </Col>

      <Col lg={{ span: 7, order: 2 }} span={14} order={1} className={styles.avatar}>
        <Fade top>
          <img src={wangcun} alt="头像" />
        </Fade>
      </Col>

      <Col lg={{ span: 5, order: 3 }} span={24} order={2} className={styles.name}>
        <p>王</p>
        <p>存</p>
      </Col>
    </Row>
  );
};

export default Profile;
