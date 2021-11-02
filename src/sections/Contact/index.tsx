import React from 'react';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Title from '../../components/Title';
import styles from './styles.module.scss';
// import { contacts } from './constants';
import { detectMobile } from '../../utils';

const isMobile = detectMobile();
// const emailStr = 'mailto:haixiang6123@gmail.com?subject=想说啥就说啥吧&body=大胆说出你的想法~';

const Contact = () => (
  <Section id="contact" className={styles.contact} style={{ backgroundAttachment: isMobile ? 'initial' : 'fixed' }}>
    <Title tag="h2">找到我 🙋‍♂️</Title>

    <Fade bottom>
      <div className={styles.container}>
        {/* <ul className={styles.contactList}>
          {contacts.map((contact) => (
            <li key={contact.image}>
              <a href={contact.url} target="_blank" rel="noreferrer">
                <img src={contact.image} alt="contactImage" />
              </a>
            </li>
          ))}
        </ul> */}

        <RubberBand top>
          <p className={styles.subTitle}>👍 非常感谢您的关注，希望能留下好的印象</p>
        </RubberBand>

        <Button
          onClick={() => {}}
          className={styles.emailBtn}
          bg="#7d0000"
        >
          个人邮箱✉：wcc8675399@126.com
        </Button>
      </div>
    </Fade>
  </Section>
);

export default Contact;
