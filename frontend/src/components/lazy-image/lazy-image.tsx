import React, { FC, memo, useCallback, useEffect, useState} from 'react';
import { noop } from '@/utils';
import styles from './lazy-image.module.scss';

type LazyImageProps = {
  alt: string;
  hideSkeleton?: boolean;
  onLoad?: () => void;
  remoteControl?: boolean;
  src: string;
};

export const LazyImageComponent: FC<LazyImageProps> = ({
  alt,
  hideSkeleton,
  onLoad = noop,
  remoteControl,
  src,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShowSkeleton, setIsShowSkeleton] = useState(true);

  useEffect(() => {
    if (isLoaded || hideSkeleton) {
      setTimeout(() => {
        setIsShowSkeleton(false);
      }, 700);

    }
  }, [isLoaded, hideSkeleton]);

  const handleLoad = useCallback(() => {
    if (!remoteControl) {
      setIsLoaded(true);
    }

    onLoad();
  }, [onLoad, remoteControl]);

  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        onLoad={handleLoad}
      />
      {isShowSkeleton && (<span className={styles.skeleton}/>)}
    </div>
  );
};

export const LazyImage = memo(LazyImageComponent);