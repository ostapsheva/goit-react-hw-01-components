import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.section}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{ background: randomColor() }}
            className={styles.item}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function randomColor() {
  return `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255,
  )},${Math.round(Math.random() * 255)} )`;
}

export default Statistics;
