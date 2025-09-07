import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Image, TouchableOpacityProps } from 'react-native';
import { NewsArticle } from '../../../entities/news/types';
import { formatDate } from '../../lib/formatDate';

const Card = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: 12px;
  elevation: 2;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;
`;

const Meta = styled.Text`
  color: #6b7280;
  font-size: 12px;
  margin-top: 6px;
`;

const Thumb = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  background-color: #e5e7eb;
`;

type Props = {
  article: NewsArticle;
  onPress?: () => void;
} & TouchableOpacityProps;

export const NewsCard: React.FC<Props> = ({ article, onPress, ...rest }) => {
  const [error, setError] = useState(false);

  const source =
    !error && article.urlToImage
      ? { uri: article.urlToImage }
      : require('@/shared/assets/placeholder.png');

  return (
    <Card onPress={onPress} activeOpacity={0.85} {...rest}>
      <Thumb
        source={source}
        defaultSource={require('@/shared/assets/placeholder.png')}
        onError={() => setError(true)}
        resizeMode="cover"
      />
      <Title numberOfLines={3}>{article.title}</Title>
      <Meta>
        {article.source?.name || '—'} • {formatDate(article.publishedAt)}
      </Meta>
    </Card>
  );
};
