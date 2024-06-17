import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { sxTitle } from '../../assets/styles/CommonSxProps';
import BackButton from '../../components/BackButton';
import { PendenciaResponse } from '../../interfaces/entities/PendenciaResponse';
import { getPendencias } from '../../services/LivroService';
import PendenciaCard from './PendenciaCard';
import './styles.css';

const Pendencias: React.FC = () => {

  const [pendencias, setPendencias] = useState<PendenciaResponse[]>([]);

  useEffect(() => {
    fetchPendencias();
  }, [])


  const fetchPendencias = async () => {
    const response = await getPendencias();
    if (response?.status === 200) {
      setPendencias(response.data);
    } else {
      console.error(response);
    }
  }

  return (
    <>
      <div className='feature-container'>
        <Typography sx={sxTitle}>Registro de pendências</Typography>
        <div className='pendencia-cards-holder'>
          {pendencias.length > 0 &&
            <>
              {pendencias.map((pendencia, index) =>
                <PendenciaCard pendencia={pendencia} key={index} />
              )}
            </>
          }
        </div>
        <BackButton />
      </div>
    </>
  )
}

export default Pendencias;