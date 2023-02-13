import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li
        className={css.item}
        key={id}
        style={{ backgroundColor: randomColor() }}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
</section>
);

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