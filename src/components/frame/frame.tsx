import styles from './frame.module.scss';

export type FrameProps = {
    images: string[];
    index: number;
};

export function Frame({ images, index }: FrameProps) {
    return (
        <div className={styles.frame}>
            <div className={styles['image-wrapper']}>
                {images.map((img, i) => (
                    <img
                        key={`${img}-${i}`}
                        src={img}
                        className={`${styles.image} ${i === index ? styles.visible : ''}`}
                        alt=""
                        draggable="false"
                    />
                ))}
            </div>
        </div>
    )
}

export default Frame;