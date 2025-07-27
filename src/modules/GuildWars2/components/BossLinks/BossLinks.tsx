import { Button, ButtonProps, styled } from '@mui/material';

import { BossInfo } from '../../data';

type AnchorButtonProps = ButtonProps<'a', { component: 'a' }>;
const StyledButton = styled(Button)<AnchorButtonProps>(({ size }) => ({
  ...(size === 'medium' && { minWidth: '150px' }),
}));

interface BossLinksProps {
  bossInfo: BossInfo;
  size: 'small' | 'medium';
}

export const BossLinks = (props: BossLinksProps) => {
  const { bossInfo, size } = props;

  return (
    <>
      <StyledButton
        component='a'
        variant='outlined'
        size={size}
        href={bossInfo.snowcrows}
        target='_blank'
      >
        Snow Crows
      </StyledButton>

      <StyledButton
        component='a'
        variant='outlined'
        size={size}
        href={bossInfo.wiki}
        target='_blank'
      >
        Guild Wars 2 Wiki
      </StyledButton>
    </>
  );
};
