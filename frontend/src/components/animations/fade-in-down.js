import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const FadeInDown = styled.div`animation: 10s ${keyframes`${fadeInDown}`}`;

export default FadeInDown;