import { Box, Button, Icon } from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

type ResetButtonProps = {
  onClick: () => void;
};

export function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <Box className="d-flex flex-row-reverse align-items-center">
      <Button variant="outlined">Restart</Button>
    </Box>
  );
}
