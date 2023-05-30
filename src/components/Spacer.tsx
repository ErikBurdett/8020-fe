import * as React from 'react';
import { Box } from '@mui/system';

interface SpacerProps {
  size?: number; // size in pixels
}

const Spacer: React.FC<SpacerProps> = ({ size = 1 }) => (
  <Box m={size} />
);

export default Spacer;
