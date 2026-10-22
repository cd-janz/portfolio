import styles from './code.module.css';
import type { Token as TokenModel } from '../model/types';

export const Token = (props: { token: TokenModel }) => (
  <span class={styles[props.token.kind]}>{props.token.text}</span>
);
