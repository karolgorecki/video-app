import React, { Component } from 'react';
// import styles from './Demo.scss';
/**
 * Demo is a demo component
 */
export default class Demo extends Component {
  render() {
    const styles = require('./Demo.scss');
    return (
      <div className={styles.my}>I am demo comp</div>
    );
  }
}
