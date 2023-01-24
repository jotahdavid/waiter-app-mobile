import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import isAndroid from '../utils/isAndroid';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 74px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #fff;
  padding: 16px 24px;
  justify-content: center;
`;

export const FooterContainer = styled.SafeAreaView``;
