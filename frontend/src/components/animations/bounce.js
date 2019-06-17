import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;

export default Bounce;