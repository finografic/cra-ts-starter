/** @jsxImportSource @emotion/react */
import { FC, ReactElement } from 'react';
// import PropTypes from 'prop-types';

import { styles } from './Spinner.css';

type SpinnerProps = {
  inline: boolean | null;
  page: boolean | null;
  layout: boolean;
  color: string;
  light: boolean;
  dark: boolean;
};

// Spinner.propTypes = {
//   inline: PropTypes.bool,
//   page: PropTypes.bool,
//   layout: PropTypes.bool,
//   color: PropTypes.string,
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
// };

export const Spinner: FC<SpinnerProps> = ({
  inline, 
  page, 
  layout, 
  color, 
  light, 
  dark, 
}: SpinnerProps): ReactElement => {
  // SET CLASSES FROM PROPS
  const getClasses = () => {
    const classes = new Set();
    classes.add('spinner');
    inline && classes.add('inline');
    page && classes.add('page');
    layout && classes.add('layout');
    if (color && !light && !dark) {
      classes.add(`color-${color}`);
    } else {
      light && !dark && classes.add('color-light');
      dark && !light && classes.add('color-dark');
    }
    return [...classes].join(' ');
  };

  return (
    <div css={styles} className={getClasses()}>
      <div className="spin-parts">Loading...</div>
    </div>
  );
};


