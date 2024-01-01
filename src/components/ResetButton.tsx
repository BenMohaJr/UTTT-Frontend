import { Box, Button, Icon } from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type ResetButtonProps = {
  onClick: () => void;
};

export function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <Box className="d-flex flex-row-reverse align-items-center">
      <Button
        variant="contained"
        startIcon={<AutorenewIcon />}
        onClick={onClick}
      >
        Restart
      </Button>
    </Box>
  );
}
