import LinkItem from "./LinkItem";

import styles from './LinkBar.module.css';

function LinkBar(props) {
  return (
    <ul className={[styles.list, props.style].join(' ')}>
      <LinkItem image="" title="Github" link="" />
      <LinkItem image="" title="Twitter" link="" />
    </ul>
  );
}

export default LinkBar;
