/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { styles } from './Spinner.css';

type Props = {
  inline?: boolean;
  page?: boolean;
  layout?: boolean;
  color?: string;
  light?: boolean;
  dark?: boolean;
};

export const Spinner: FC<Props> = ({
  inline, 
  page, 
  layout, 
  color, 
  light, 
  dark, 
}: Props) => {
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


