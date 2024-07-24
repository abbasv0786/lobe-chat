// import { ImageProps } from 'antd';
// import { memo } from 'react';

// import { useCdnFn, ImgProps } from '@lobehub/ui';
// import Img from '@/Img';
// import { LOGO_3D } from '../style';

// const Logo3d = memo<
//   Omit<ImgProps & ImageProps, 'width' | 'height' | 'src'> & { size?: number | string }
// >(({ size = '1em', style, alt = 'LobeHub', ...rest }) => {
//   const genCdnUrl = useCdnFn();
//   return (
//     <Img alt={alt} height={size} src={genCdnUrl(LOGO_3D)} style={style} width={size} {...rest} />
//   );
// });

// export default Logo3d;
