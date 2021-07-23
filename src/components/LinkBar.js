import LinkItem from "./LinkItem";

import styles from './LinkBar.module.css';

function LinkBar() {
  return (
    <ul className={styles.list}>
      <LinkItem image="" title="Github" link="" />
      <LinkItem image="" title="Twitter" link="" />
    </ul>
  );
}

export default LinkBar;
