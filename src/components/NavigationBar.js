import NavigationItem from './NavigationItem';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <NavigationItem route='/' name='Home' />
      <NavigationItem route='/projects' name='Projects' />
      <NavigationItem route='/blog' name='Blog' />
      <NavigationItem route='/contact' name='Contact' />
    </nav>
  );
}

export default NavigationBar;
