import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from './MainPageStyles.module.css'

class MainMenu extends Component {

    styleBackground = {
        backgroundColor: 'white',
        height: '100vh',
    };
    
    styleRibbon = {
        backgroundColor: 'indianred',
        height: '30%',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '40px',
    };
    
    styleMainLabel = {
        fontSize: '120px',
        fontWeight: 'bold',
        color: 'white',
        margin: 'auto',
    }
    
    styleButton = {
        fontSize: '60px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'indianred',
        borderRadius: '10px',
        height: '120px',
        width: '400px',
        margin: 'auto',
        border: 'none',

        "&:hover": {
            opacity: "0.6"
        }
    };

    render() {
        return (
            <div style={this.styleBackground}>
                <div style={this.styleRibbon}>
                    <label style={this.styleMainLabel}>Alterna-Canvas</label>
                </div>
                <div style={{height: 'calc(100vh - 400px)', display: 'flex', alignItems: 'center'}}>
                    <button style={this.styleButton}>Login</button>
                </div>
            </div>
        )
    }
}

export default MainMenu;