import NavigationBar from '../navigation/NavigationBar';
import LinkBar from '../link/LinkBar';

import styles from './Header.module.css';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerLogo} src={logo} alt="Logo"></img>
      <NavigationBar style={styles.headerNavigation} />
      <LinkBar style={styles.headerLinks} />
    </header>
  );
}

export default Header;
