import React from 'react';
import { useNavigate } from 'react-router';
import { Button, CardActionArea, CardActions, CardMedia, Stack, Typography } from '@mui/material';

import { BossInfo } from 'data';
import { PlaceIcon } from 'icons';

import { BossName, Card, CardContent, CardMediaContainer } from './BossCard.styled';

interface BossCardProps {
  bossInfo: BossInfo;
}

export const BossCard = (props: BossCardProps) => {
  const { bossInfo } = props;
  const redirectTarget = `/${bossInfo.code}`;

  // Handle navigation when card is clicked
  const navigate = useNavigate();
  const handleCardClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      if (event.ctrlKey) window.open(redirectTarget, '_blank');
      else navigate(redirectTarget);
    },
    [navigate, redirectTarget],
  );

  return (
    <Card>
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

      <CardActions onClick={event => event.stopPropagation()}>
        <Button
          variant='outlined'
          component='a'
          size='small'
          href={bossInfo.snowcrows}
          target='_blank'
        >
          Snow Crows
        </Button>
        <Button variant='outlined' component='a' size='small' href={bossInfo.wiki} target='_blank'>
          Guild Wars 2 Wiki
        </Button>
      </CardActions>
    </Card>
  );
};
