import React, { FC } from 'react';
import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';
import styles from './styles.module.scss';
import useTyped from '../../hooks/useTyped';
import useLottie from '../../hooks/useLottie';
import { arrowDownLottie, beiqiLottie } from './constants';

const strings = [
  '炒炒股',
  '聊聊技术。',
  '吹吹水。',
  '打打游戏。',
  '唱唱歌。',
];

const Home: FC = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const beiqiLottieRef = useLottie(beiqiLottie);

  const next = () => {
    const $about = document.querySelector('#about');
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={beiqiLottieRef} />
            </div>
          </Fade>
        </Col>

        <Col span={24} md={15} className={styles.intro}>
          <p>我是王存👦，</p>
          <p>一位 <i className={styles.tencent}>前端开发</i>🐸工程师，写 <span>React</span> 的。</p>
          <p>喜欢旅行🚀，</p>
          <p>偶尔<span className={styles.sometime} ref={el} /></p>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
