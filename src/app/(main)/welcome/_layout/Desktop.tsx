import { GridShowcase } from '@lobehub/ui';
// import { IntellectX } from '../../../../components/brand';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

// import Follow from '@/features/Follow';

const COPYRIGHT = `Copyright © ${new Date().getFullYear()} IntellectX - All Rights Reserved.`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flexbox
        align={'center'}
        height={'100%'}
        justify={'space-between'}
        padding={16}
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <strong style={{alignSelf: 'flex-start', fontSize: 24 }}>IntellectX</strong>
        {/* <IntellectX size={36} style={{ alignSelf: 'flex-start' }} type={'text'} /> */}
        <GridShowcase
          innerProps={{ gap: 24 }}
          style={{ maxHeight: 'calc(100% - 104px)', maxWidth: 1024 }}
          width={'100%'}
        >
          {children}
        </GridShowcase>
        <Flexbox align={'center'} horizontal justify={'space-between'}>
          <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
          {/* <Follow /> */}
        </Flexbox>
      </Flexbox>
      {/* ↓ cloud slot ↓ */}

      {/* ↑ cloud slot ↑ */}
    </>
  );
};

export default DesktopLayout;
