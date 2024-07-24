import { memo } from 'react';

import { DivProps, SvgProps } from '@lobehub/ui';

const LogoMono = memo<SvgProps & DivProps & { size?: number }>(
  ({ size = '1em', style, ...rest }) => {
    return (
      <svg
        height={size}
        style={{ flex: 'none', lineHeight: 1, ...style }}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <title>LobeHub</title>
        <path
          d="M22.951 13.475C22.951 19.672 18.082 24 11.975 24 5.87 24 1 19.59 1 13.393c0-1.843.41-2.633 2.58-2.922 3.89-.518 5.942-.313 8.396-.313 2.453 0 5.942-.104 8.395.313 2.007.342 2.457.71 2.58 3.004z"
          fill="#BFBFBF"
        ></path>
        <path
          d="M11.955 19.209c-2.314 0-2.928.286-2.928.286s.287 2.212 2.928 2.212c2.642 0 2.928-2.212 2.928-2.212s-.614-.287-2.928-.287z"
          fill="#4F4F4F"
        ></path>
        <ellipse cx="12.017" cy="11.509" fill="#838383" rx="9.133" ry=".942"></ellipse>
        <path
          d="M9.969 12.451c.052-1.226-.04-1.867-.45-2.985 0 0 .777-.987 2.21-.987 1.434 0 2.458.25 2.458.25-.248 1.376-.26 2.206-.205 3.722H9.97z"
          fill="#E1E1E1"
        ></path>
        <path
          d="M8.633 18.535c1.207-.58 2.032-1.762 2.032-3.217 0-2.081-1.687-3.932-3.768-3.932-2.08 0-3.85 1.605-3.85 3.686 0 1.146.537 2.196 1.365 2.91a4.582 4.582 0 011.625-.289c1.04 0 1.972.327 2.596.842zM15.318 18.535c-1.207-.58-2.032-1.762-2.032-3.217 0-2.081 1.687-3.932 3.768-3.932 2.08 0 3.85 1.605 3.85 3.686 0 1.146-.537 2.196-1.365 2.91a4.582 4.582 0 00-1.625-.289c-1.04 0-1.972.327-2.596.842z"
          fill="#fff"
        ></path>
        <path
          d="M16.808 17.447a2.293 2.293 0 110-4.586 2.293 2.293 0 010 4.586zM7.143 17.447a2.293 2.293 0 100-4.586 2.293 2.293 0 000 4.586z"
          fill="#1A1A1A"
        ></path>
        <path
          d="M13.04.902c-1.149 0-1.597-.942-3.358-.9-1.916 0-2.785 1.064-3.727 1.883-.16.14-.942.574-1.31.737-1.612.717-2.826 1.761-2.826 3.318 0 1.696 1.43 3.071 3.194 3.071.29 0 .57-.037.838-.106.712.863 1.816 1.364 3.053 1.417 1.925.082 2.54-1.25 3.645-.697.758.38 1.133.697 2.334.697 1.402 0 2.053-.43 2.457-.901.738-.86 1.874-.328 2.58-.328 1.538 0 2.785-1.192 2.785-2.662s-1.246-2.662-2.784-2.662c-.422 0-1.217.104-1.393-.573C18.241 2.09 16.878.82 14.924.82c-.763 0-1.449.082-1.884.082z"
          fill="#838383"
        ></path>
        <circle cx="4.891" cy="1.025" fill="#838383" r=".778"></circle>
        <circle cx="20.699" cy="3.4" fill="#C8C8C8" r="1.27"></circle>
        <path
          d="M9.701 19.34c.45-.068 1.163-.131 2.254-.131 1 0 1.683.053 2.136.114-.127.48-1.062.664-2.197.664-1.122 0-2.05-.18-2.193-.647z"
          fill="#fff"
        ></path>
        <path
          d="M11.976 23.099c1.646 0 1.909-1.678 1.96-2.098.039-.34-.137-.511-.33-.627-.191-.116-.768-.224-1.63-.224-.862 0-1.435.108-1.63.224-.196.116-.373.288-.33.627.051.42.314 2.098 1.96 2.098z"
          fill="#838383"
        ></path>
        <path
          d="M12.934 9.972c-.47-.319-1.143-.348-1.621-.043a4.086 4.086 0 01-2.204.638c-2.217 0-4.014-1.742-4.014-3.89 0-2.149 1.797-3.89 4.014-3.89 1.116 0 2.126.44 2.853 1.154.406.397 1.072.51 1.597.295.407-.167.855-.259 1.324-.259 1.878 0 3.4 1.475 3.4 3.295 0 1.82-1.523 3.295-3.4 3.295-.725 0-1.397-.22-1.95-.595z"
          fill="#C8C8C8"
        ></path>
        <path
          d="M3.375 9.502a1.31 1.31 0 100-2.62 1.31 1.31 0 000 2.62zM15.702 9.175a1.106 1.106 0 100-2.212 1.106 1.106 0 000 2.212z"
          fill="#4F4F4F"
        ></path>
      </svg>
    );
  },
);

export default LogoMono;
