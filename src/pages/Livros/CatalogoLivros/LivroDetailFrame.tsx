import { Box, Typography } from "@mui/material";
import { LivroDetailProps } from "../../../interfaces/props/LivroDetailProps";
import './styles.css';
import { sxBoxLivroDetail, sxDetailLabel, sxDetailValue } from "./sxProps";

const LivroDetailFrame: React.FC<LivroDetailProps> = ({ label, value }) => {
  return (
    <Box sx={sxBoxLivroDetail}>
      <Typography sx={sxDetailLabel}>{label}</Typography>
      <Typography sx={sxDetailValue}>{value}</Typography>
    </Box>
  )
}

export default LivroDetailFrame;