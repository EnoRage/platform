import React from 'react';
import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';

import ValidatorDetailModal from './ValidatorDetailModal';

storiesOf('Validator Detail Modal', module).add('Renders', () => (
  <ValidatorDetailModal
    onValidatorDetail={() => null}
    validator={{
      id: '1',
      imgSrc: '',
      name: 'Polychain Labs',
      apr: 5,
      detail:
        'Polychain Labs designs, builds and operates secure, institutional grade staking systems. Our team includes some of the industry’s most experienced infrastructure and security engineers who are now focused on advancing the state of staking infrastructure across many networks.',
    }}
  />
));
