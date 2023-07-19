'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverso </span> se refere a um espaço compartilhado virtual coletivo criado pela convergência das realidades física e digital, onde você pode desfrutar do mundo virtual, sentindo
        como se fosse realmente real, você pode sentir o que sente neste mundo. {' '}
        <span className="font-extrabold text-white">

        </span>{' '}
        Usando apenas{' '}
        <span className="font-extrabold text-white">VR,</span> dispositivos que você pode
        explore facilmente o mundo metaverso que você deseja, transforme seus sonhos em
        realidade. vamos{' '}
        <span className="font-extrabold text-white">explorar</span> a loucura
        do metaverso rolando para baixo
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;