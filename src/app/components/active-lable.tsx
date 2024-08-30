import React from 'react';
import styles from './active-lable.module.css';

export interface ActiveLabelProps {
    children: React.ReactNode;
}

console.log(styles);
export default function ActiveLabel({ children }: ActiveLabelProps) {
    return <span className={styles.label}>{children}</span>;
}