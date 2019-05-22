import React, { FunctionComponent } from 'react';

interface Props {
  fill?: string;
}

export const LogoutSVG: FunctionComponent<Props> = ({ fill }) => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill={fill ? fill : 'white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.8833 16.369C36.8046 16.1809 36.6921 16.0098 36.5487 15.8664L31.925 11.2429C31.3222 10.6417 30.3478 10.6417 29.745 11.2429C29.1422 11.8457 29.1422 12.8216 29.745 13.4228L31.7385 15.4162H23.1262C22.2736 15.4162 21.5845 16.1068 21.5845 16.9578C21.5845 17.8088 22.2736 18.4995 23.1262 18.4995H31.7384L29.7449 20.4928C29.1421 21.0956 29.1421 22.0715 29.7449 22.6727C30.0456 22.9749 30.4402 23.1245 30.835 23.1245C31.2297 23.1245 31.6244 22.9749 31.925 22.6727L36.5487 18.0493C36.6921 17.9074 36.8046 17.7363 36.8833 17.5466C37.0389 17.1707 37.0389 16.7452 36.8833 16.369Z"
        fill="white"
      />
      <path d="M26.2097 21.5833C25.3571 21.5833 24.668 22.274 24.668 23.125V30.8333H18.501V6.16663C18.501 5.48676 18.0539 4.88551 17.4017 4.68974L12.0472 3.08335H24.668V10.7917C24.668 11.6427 25.3571 12.3333 26.2097 12.3333C27.0623 12.3333 27.7514 11.6427 27.7514 10.7917V1.54171C27.7514 0.690641 27.0623 0 26.2097 0H1.54173C1.48622 0 1.43686 0.023125 1.38295 0.0292675C1.31046 0.0369999 1.24419 0.0492851 1.17481 0.0662675C1.01293 0.107892 0.866439 0.171125 0.729272 0.25741C0.695377 0.279017 0.65375 0.280535 0.621373 0.305177C0.608943 0.314499 0.604318 0.331482 0.59196 0.340732C0.423933 0.473267 0.283658 0.635141 0.181902 0.827873C0.160294 0.869498 0.155669 0.914231 0.138757 0.957373C0.0893974 1.07452 0.0354843 1.18862 0.0169833 1.31812C0.0092505 1.36437 0.0231262 1.40752 0.0216086 1.45225C0.0200909 1.4831 0 1.51085 0 1.54164V32.3749C0 33.1103 0.519545 33.7424 1.23957 33.8858L16.657 36.9691C16.7573 36.9908 16.859 37 16.9592 37C17.3122 37 17.6591 36.8782 17.9366 36.65C18.2928 36.3571 18.5009 35.9208 18.5009 35.4583V33.9167H26.2097C27.0623 33.9167 27.7514 33.226 27.7514 32.375V23.125C27.7514 22.274 27.0623 21.5833 26.2097 21.5833Z" />
    </svg>
  );
};