import { SxProps } from "@mui/material";

export const sxFeatureCard: SxProps = {
    borderRadius: '10px',
    textTransform: 'none',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.08)',
    '&:hover': {
        boxShadow: '0px 4px 50px 0px',
        backgroundColor: '#FFF'
    }
}

export const sxHomeShowNotification: SxProps = {
    textDecoration: 'underline',
    fontSize: '15px',
    fontFamily: 'sans-serif',
    textTransform: 'none',
}

export const sxHoverNotificationCardHome: SxProps = {
    color: 'rgba(0, 0, 0, 0.08)',
    '&:hover': {
        boxShadow: '0px 4px 50px 0px',
        backgroundColor: '#FFF'
    }
}

export const sxModalTitle: SxProps = {
    fontFamily: 'sans-serif',
    color: '#383838',
    fontSize: '28px',
    lineHeight: '35px',
    textAlign:'center'
  }

export const sxRegular: SxProps = {
	fontFamily: 'sans-serif', 
	fontSize: '16px', 
	lineHeight: '24px', 
	color: '#5F5F5F',
}

export const sxModal: SxProps = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: '700px',
	width: '85%',
	bgcolor: '#fff',
	borderRadius: '16px',
	border: 'none',
	boxShadow: '0px 4px 100px 0px rgba(56, 56, 56, 0.20)',
	padding: '32px',
	gap: '24px',
	maxHeight: '100vh',
	overflow: 'auto',
}

export const sxButtonVoltar: SxProps = {
	borderRadius: '80px',
	height: '44px',
	width: '243px',
	'@media (max-width: 720px)': {
			width: '100%',
	}
}