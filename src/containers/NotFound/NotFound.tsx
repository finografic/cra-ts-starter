/** @jsxImportSource @emotion/react */
import { ButtonLink } from 'components/Button';
import { Row, Col } from 'react-grid-system';

import { styles } from './NotFound.css';

const NotFound = () => (
  <section css={styles}>
    <Row align="center" justify="center" style={{ height: '100%' }}>
      <Col>
        <section>
          <h3>404 -Not Found</h3>
          <p>¯\_(ツ)_/¯</p>
          <ButtonLink to="/" label="Back Home" />
        </section>
      </Col>
    </Row>
  </section>
);

export default NotFound;
