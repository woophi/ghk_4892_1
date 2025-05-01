import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});

const row = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

const banner = style({
  display: 'flex',
  borderRadius: '16px',
  padding: '0 1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const bannerText = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '128px',
  padding: '1rem 0',
});

const swSlide = style({
  height: '218px',
  maxWidth: '328px',
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
const swSlide2 = style({
  height: '164px',
  maxWidth: '156px',
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#F2F3F5',
});
const swSlide3 = style({
  height: '160px',
  maxWidth: '156px',
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const chip = style({
  backgroundColor: '#0000007A',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '8px',
  color: '#fff',
  padding: '2px 6px',
});

const chips = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const imgSlider = style({
  position: 'absolute',
  zIndex: -1,
  right: '-40px',
  bottom: 0,
});
const imgSlider2 = style({
  position: 'absolute',
  zIndex: -1,
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
});
const imgSlider3 = style({
  position: 'absolute',
  zIndex: -1,
  right: '0',
  bottom: '0',
});

export const appSt = {
  container,
  box,
  row,
  banner,
  bannerText,
  swSlide,
  chip,
  chips,
  imgSlider,
  swSlide2,
  imgSlider2,
  swSlide3,
  imgSlider3,
};
