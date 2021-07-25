import NavigationItem from './NavigationItem';

import styles from './NavigationBar.module.css';

function NavigationBar(props) {
  return (
    <nav className={[styles.nav, props.style].join(' ')}>
      <NavigationItem route='/' name='Home' />
      <NavigationItem route='/projects' name='Projects' />
      <NavigationItem route='/blog' name='Blog' />
      <NavigationItem route='/contact' name='Contact' />
    </nav>
  );
}

export default NavigationBar;
