import React from 'react';
import Timeline from '../../../components/Timeline';
import TimelineHeader from '../../../components/Timeline/Header';
import TimelineItem from '../../../components/Timeline/Item';
import HighLight from '../../../components/HighLight';
import useTyped from '../../../hooks/useTyped';

// Icons
import lucent from '../../../assets/icons/lucent.png';
import cumt from '../../../assets/icons/cumt.png';
import tenxcloud from '../../../assets/icons/tenxcloud.png';

import styles from './styles.module.scss';

const strings = [
  '码农',
  '社畜',
  '打工人',
  '程序员',
  '工程师',
  '前端开发',
];

const Life = () => {
  const el = useTyped(strings, { loop: true });
  const elT = useTyped(strings, { loop: true });

  return (
    <Timeline>
      <TimelineHeader>1989</TimelineHeader>
      <TimelineItem direction="right" time="5月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="🙇‍♂️ 好好学习，天天向上..." />
      <TimelineHeader>2012</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={['🎓 本科毕业 🎉']}
        node={<span className={styles.customNode}><img width={46} src={cumt} alt="uci" /></span>}
        content={[
          '江苏，徐州',
          <span>
            <HighLight>中国矿业大学</HighLight> @ 信息工程
          </span>,
          '最初写 C 和 Java，慢慢转写 JavaScript，前端真好玩！',
        ]}
      />
      <TimelineHeader>2015</TimelineHeader>
      <TimelineItem
        time="6月"
        header={['🎓 研究生毕业 🎉']}
        content={[
          '依然是江苏，徐州',
          <span>
            <HighLight>中国矿业大学</HighLight> @ 信息工程
          </span>,
        ]}
      />
      <TimelineItem
        time="7月"
        direction="right"
        node={<span className={styles.customNode}><img width={40} src={lucent} alt="tencent" /></span>}
        header={[
          '山东，青岛',
          <span className={styles.position}>
            入职 <HighLight>青岛朗讯（现在的Nokia）</HighLight> 📱@ <span className={styles.typed} ref={el} />
          </span>,
        ]}
      />
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        time="7月"
        node={<span className={styles.customNode}><img width={30} src={tenxcloud} alt="tencent" /></span>}
        header={[
          '中国，北京',
          <span className={styles.position}>
            入职 <HighLight>时速云</HighLight> 🚀@ <span className={styles.typed} ref={elT} />
          </span>,
        ]}
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem
        direction="right"
        header={['？？？']}
      />
      <TimelineHeader>💀 ⚰️</TimelineHeader>
    </Timeline>
  );
};

export default Life;
