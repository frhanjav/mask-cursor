'use client';
import useMousePosition from './utils/useMousePosition';
import styles from './page.module.scss';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Web3 is the real game-changer, handing power back to users with decentralized networks that make Big Tech cry.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          AI is a <span>digital sorcerer</span>, weaving wonders from code—summoning art from nothing and reshaping imagination into reality.
        </p>
      </div>
    </main>
  );
}
