/* eslint-disable sort-keys-fix/sort-keys-fix */
'use client';

// import { IntellectX } from '../../components/brand';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import { UTM_SOURCE } from '@/const/url';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    height: 20px;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      align-items={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{  lineHeight:'normal', color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
     {/* <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}> */}
      <span>Powered by</span>
      <Link
        className={styles.logoLink}
        href={`${UTM_SOURCE}`}
        target={'_blank'}
      >
      <strong style={{ fontSize: 20, alignItems: 'center' }}>IntellectX</strong>
      </Link>
      {/* </div> */}
    </Flexbox>
  );
});

export default BrandWatermark;
