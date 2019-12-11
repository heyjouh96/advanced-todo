import React from 'react';

import Colors from './children/Colors/Colors';
import Activities from './children/Activities/Activities';

// styles
import {
  OptionsContainer,
} from './styles';

function Options() {

  return (
    <OptionsContainer>
      <h2>Options</h2>

      <Colors />

      <Activities />

    </OptionsContainer>
  );
}

export default Options;
