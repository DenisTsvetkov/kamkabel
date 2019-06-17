import React from 'react';
import { KamkabelServiceConsumer } from '../kamkabel-service-context';

const withKamkabelService = () => (Wrapped) => {

  return (props) => {
    return (
      <KamkabelServiceConsumer>
        {
          (kamkabelService) => {
            return (
              <Wrapped {...props} kamkabelService={ kamkabelService } />
            );
          }
        }
      </KamkabelServiceConsumer>
    );
  }
};

export default withKamkabelService;