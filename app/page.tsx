'use client';
import useMousePosition from './utils/useMousePosition';
import styles from './page.module.scss';
import { motion } from 'framer-motion';

export default function Home() {

  const {x,y} = useMousePosition;

  return (
    <main className={styles.main}>

      <motion.div className={styles.mask}>
        <p>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit
          only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I'm a <span>selectively skilled</span> product designer with strong focus on producing
          high quality & impactful digital experience.
        </p>
      </div>

    </main>
  );
}
