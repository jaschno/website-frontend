import NavigationBar from './NavigationBar';
import LinkBar from './LinkBar';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}></div>
      <NavigationBar />
      <LinkBar />
    </header>
  );
}

export default Header;
