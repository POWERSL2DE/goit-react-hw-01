import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.container}>

      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(item => (
          <tr key={item.id}>
            <th>{item.type}</th>
            <th>{item.amount}</th>
            <th>{item.currency}</th>
          </tr>
        ))}
      </tbody>
        
    </table>
  );
};