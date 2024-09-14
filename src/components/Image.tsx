"use client"
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

const baseUrl = '/c0d-frontend';

export default function ImageComponent({ src, onError, ...props }: ImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  if (typeof src !== 'string') {
    return <Image {...props} src={src} />;
  }

  const handleError = () => {
    setImageSrc(`${baseUrl}${src}`);
  };

  return (
    <Image
      {...props}
      src={imageSrc}
      onError={(e) => {
        handleError();
        onError?.(e);
      }}
    />
  );
}
