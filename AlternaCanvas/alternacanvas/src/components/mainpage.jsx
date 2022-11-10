import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from './MainPageStyles.module.css'

class MainMenu extends Component {



    render() {
        return (
            <div className={styles.styleBackground}>
                <div className={styles.styleRibbon}>
                    <label className={styles.styleMainLabel}>Alterna-Canvas</label>
                </div>
                <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
                    <button className={styles.styleButton}>Login</button>
                </div>
            </div>
        )
    }
}

export default MainMenu;