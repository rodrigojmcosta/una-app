import { SxProps } from "@mui/material";

export const sxTitle: SxProps = {
  fontFamily: "sans-serif",
  fontSize: "24px",
  lineHeight: "30px",
  fontWeight: "700",
  letterSpacing: "0em",
  textAlign: "left"
}

export const sxSubTitle: SxProps = {
  fontFamily: "sans-serif",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0em",
  fontWeight: "700",
  textAlign: "left",
  color: '#4C4C4C',
}

export const sxDarkGreyBody: SxProps = {
  fontFamily: "sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  color: '#4C4C4C',
}

export const sxButton: SxProps = {
  borderRadius: '80px',
  height: '44px',
  padding: '24px 32px'
}

export const sxFormError: SxProps = {
  color: '#D84141',
  fontSize: '12px'
}

export const sxFormBox: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-start',
  gap: '25px'
}

export const sxLabel: SxProps = {
  fontFamily: 'sans-serif',
  color: '#383838',
  fontWeight: 600,
}

export const sxDivider: SxProps = {
  width: '100%',
  height: '1px',
  fill: 'none',
  backgroundColor: '#a5a5a5',
  opacity: '0.4'
}

export const sxLabeledOutlinedInput: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '@media (max-width: 768px)': {
    width: '100%'
  }
}

export const sxInputLarge: SxProps = {
  fontFamily: 'Unimed-Sans',
  color: '#383838',
  fontWeight: 400,
  fontSize: '14px',
  minWidth: '400px',
  '@media (max-width: 768px)': {
    minWidth: 'unset'
  }
}

export const sxInputSmall: SxProps = {
  fontFamily: 'Unimed-Sans',
  color: '#383838',
  fontWeight: 400,
  fontSize: '14px',
  width: '300px',
  '@media (max-width: 768px)': {
    maxWidth: 'unset',
    width: 'stretch'
  },
  '@media (min-width: 768px) and (max-width: 899px)': {
    minWidth: '400px'
  }
}