import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme'

export const LoadingContainer = styled(View)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
justify-content: space-around;
align-items: center;
z-index: 9999;
background-color: ${theme.colors.ui.secondary};
`;

export const LoadingLogo = styled(Image)`
  width: 200px;
  height: 200px;
`;