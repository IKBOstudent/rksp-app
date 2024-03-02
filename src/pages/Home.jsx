import React, { useCallback, useState } from 'react';
import styles from './Home.module.css';

function Home() {
    const [count, setCount] = useState(0);

    const handleButtonClick = useCallback(() => setCount(prev => prev + 1), []);

    return (
        <>
            <h1 className={styles.title}>Vite + React</h1>
            <div className={styles.card}>
                <button className={styles.button} onClick={handleButtonClick}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default Home;
