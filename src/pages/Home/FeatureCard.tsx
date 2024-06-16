import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from '@mui/material';
import { FeatureCardProps } from '../../interfaces/props/FeatureCardProps';
import './styles.css';
import { sxFeatureCard } from './sxProps';

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, icon, to, iconDimensionClass }) => {

  return (
    <Button
      sx={sxFeatureCard}
      className='feature-card' onClick={to}
    >
      <FontAwesomeIcon icon={icon} className={iconDimensionClass} />
      <Typography variant="body2" style={{ color: 'black', fontWeight: 'bold' }}>
        {feature}
      </Typography>
    </Button>
  )
}


export default FeatureCard; 