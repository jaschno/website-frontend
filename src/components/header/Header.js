import NavigationBar from '../navigation/NavigationBar';
import LinkBar from '../link/LinkBar';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}></div>
      <NavigationBar style={styles.headerNavigation} />
      <LinkBar style={styles.headerLinks} />
    </header>
  );
}

export default Header;
