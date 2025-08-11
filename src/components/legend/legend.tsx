import React from 'react';
import styles from './legend.module.scss';

export type LegendProps = {
    label: string;
    disabled?: boolean;
    type?: 'normal' | 'large' | 'long';
    withBackground?: boolean;
    children: React.ReactNode;
}

export function Legend({ label, disabled, type, withBackground, children }: LegendProps) {
    function getSlot(name: string): React.ReactNode[] {
        return React.Children.toArray(children).filter(child => {
            return React.isValidElement(child) && (child.props as { slot: string }).slot === name;
        })
    }

    const blocks: React.ReactNode[] = getSlot('block');

    return (
        <div className={`${styles.legend} ${disabled ? styles.disabled : ''}`}>
            <div className={`${styles.blocks} ${type === 'large' ? styles.large : type === 'long' ? styles.long : ''}`}>
                {blocks.length === 1 ? (
                    <div className={`${styles.block} ${withBackground ? styles['with-background'] : ''}`}>{blocks[0]}</div>) : (
                    blocks.map((block, index) => {
                        if (index === 0) {
                            return <div key={index} className={`${styles.block} ${withBackground ? styles['with-background'] : ''}`}>{block}</div>;
                        } else {
                            return (
                                <React.Fragment key={index}>
                                    <div className={styles.separator}>/</div>
                                    <div className={`${styles.block} ${withBackground ? styles['with-background'] : ''}`}>{block}</div>
                                </React.Fragment>
                            )
                        }
                    })
                )}
            </div>
            <div className={`${styles.label} ${type === 'large' ? styles.large : type === 'long' ? styles.long : ''}`}>
                {label}
            </div>
        </div>

    )
}

export default Legend;