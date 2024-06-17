import { Box, Typography } from "@mui/material";
import './styles.css';
import { sxBoxDetail, sxDetailLabel, sxDetailValue } from "./sxProps";

const PendenciaDetailFrame: React.FC<{ label: string, value: string }> = ({ label, value }) => {
  return (
    <Box sx={sxBoxDetail}>
      <Typography sx={sxDetailLabel}>{label}</Typography>
      <Typography sx={sxDetailValue}>{value}</Typography>
    </Box>
  )
}

export default PendenciaDetailFrame;