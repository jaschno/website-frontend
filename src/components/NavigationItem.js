import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.css';

function NavigationItem(props) {
  return (
    <Link className={styles.navitem} to={props.route}>{props.name}</Link>
  );
}

export default NavigationItem;