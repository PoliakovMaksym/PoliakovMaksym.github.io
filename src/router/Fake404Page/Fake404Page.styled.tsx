import { styled } from '@mui/material';

export const Root = styled('div')({
  flex: 1,
  backgroundColor: '#f1f1f1',
  color: '#000000',

  '*': {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },

  a: {
    color: '#4183c4',
    textDecoration: 'none',
  },
});

export const Container = styled('div')({
  margin: '50px auto 40px auto',
  width: '600px',
  textAlign: 'center',
});

export const Title = styled('h1')({
  width: '800px',
  position: 'relative',
  left: '-100px',
  letterSpacing: '-1px',
  lineHeight: '60px',
  fontSize: '60px',
  fontWeight: '100',
  margin: '0px 0 50px 0',
  textShadow: '0 1px 0 #ffffff',
});

export const Paragraph = styled('p')({
  color: 'rgba(0, 0, 0, 0.5)',
  margin: '20px 0',
  lineHeight: '1.6',
  letterSpacing: 'normal',
});

export const Suggestions = styled('div')({
  marginTop: '35px',
  color: '#cccccc',

  a: {
    color: '#666666',
    fontWeight: 200,
    fontSize: '14px',
    margin: '0 10px',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const LogoLink = styled('a')({
  display: 'inline-block',
  marginTop: '35px',
  cursor: 'pointer',
});
