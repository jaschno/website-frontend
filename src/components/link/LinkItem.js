import styles from './LinkItem.module.css';

function LinkItem(props) {
  return (
    <li className={styles.listItem}>
      <a classname={styles.linkImage} href={props.link} style={{ backgroundImage: `url(${props.image})` }}/>
    </li>
  );
}

export default LinkItem;

/*<li className={styles.listItem}>
      <a classname={styles.link} href={props.link}>
        <img className={styles.image} src={props.image} alt={props.title} />
      </a>
    </li>*/