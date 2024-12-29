import React from 'react';
import { useNavigate } from 'react-router';
import { CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';

import { BossLinks } from 'components/BossLinks';
import { BossInfo } from 'data';
import { PlaceIcon } from 'icons';

import { BossName, Card, CardActionArea, CardMediaContainer, DragonHead } from './BossCard.styled';

interface BossCardProps {
  bossInfo: BossInfo;
}

export const BossCard = (props: BossCardProps) => {
  const { bossInfo } = props;
  const redirectTarget = `/${bossInfo.code}`;

  // Handle navigation when card is clicked
  const navigate = useNavigate();
  const handleCardClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (event.ctrlKey) window.open(redirectTarget, '_blank');
    else navigate(redirectTarget);
  };

  return (
    <Card>
      <DragonHead src='/assets/dragon_head.png' tabIndex={-1} />

      <CardActionArea
        component='a'
        href={redirectTarget}
        onClick={handleCardClick}
        disableRipple
        disableTouchRipple
      >
        <CardMediaContainer>
          <CardMedia component='img' image={`/assets/${bossInfo.code}/${bossInfo.coverImage}`} />
        </CardMediaContainer>

        <CardContent>
          <BossName variant='h5' component='div'>
            {bossInfo.name}
          </BossName>

          <Stack direction='row' spacing={0.5}>
            <PlaceIcon fontSize='small' />
            <Typography variant='body2'>
              Wing {bossInfo.wing.number} ~ {bossInfo.wing.name}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <BossLinks size='small' bossInfo={bossInfo} />
      </CardActions>
    </Card>
  );
};
