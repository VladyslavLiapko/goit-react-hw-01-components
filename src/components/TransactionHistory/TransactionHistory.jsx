import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'


export const TransactionHistory = ({items}) => {
    return (
        <table className={css['transaction-history']}>
        <thead className={css['transaction-head']}>
          <tr>
            <th className={css['transaction-title']}>Type</th>
            <th className={css['transaction-title']}>Amount</th>
            <th className={css['transaction-title']}>Currency</th>
          </tr>
        </thead>
    
        <tbody>
          {items.map(item => (
            <tr className={css['transaction-row']} key={item.id}>
              <td className={css['transaction-cell']}>{item.type}</td>
              <td className={css['transaction-cell']}>{item.amount}</td>
              <td className={css['transaction-cell']}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ),
  };
