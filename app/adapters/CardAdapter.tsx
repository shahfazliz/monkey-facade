import { Card as CardMantine, Text, Badge, Group } from '@mantine/core';
import { Image } from './ImageAdapter';
import React, { type ReactNode } from 'react';

interface Props {
  children?: ReactNode
  description?: string
  imageAlt: string
  imageHeight: number
  imageLoader: ({ src, width }: { src: string, width: number }) => string
  width: number
  onClick?: () => void
  src: string
  title?: string
};

const CardAdapter = ({
  children,
  description,
  imageAlt,
  imageHeight,
  imageLoader,
  width,
  onClick,
  src,
  title,
}: Props): ReactNode => {
  return (
    <CardMantine
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onClick={onClick}
    >
      <CardMantine.Section>
        <Image
          alt={imageAlt}
          h={imageHeight}
          height={imageHeight}
          loader={imageLoader}
          priority={true}
          src={src}
          w={width}
          width={width}
        />
      </CardMantine.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2} w={width - 40}>
        {description}
      </Text>

      {children}
    </CardMantine>
  );
};

export { CardAdapter as Card };
