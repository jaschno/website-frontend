import styles from './LinkItem.module.css';

function LinkItem(props) {
  return (
    <li className={styles.listItem}>
      <a href={props.link}>
        <img className={styles.image} src={props.image} alt={props.title} />
      </a>
    </li>
  );
}

export default LinkItem;