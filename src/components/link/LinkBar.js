import LinkItem from "./LinkItem";

import styles from './LinkBar.module.css';

import github from '../../assets/images/github.svg';
import twitter from '../../assets/images/twitter.svg';


function LinkBar(props) {
  return (
    <ul className={[styles.list, props.style].join(' ')}>
      <LinkItem image={github} title="Github" link="" />
      <LinkItem image={twitter} title="Twitter" link="" />
    </ul>
  );
}

export default LinkBar;
