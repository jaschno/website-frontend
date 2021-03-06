import Footer from './footer/Footer';
import Header from './header/Header';

import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;