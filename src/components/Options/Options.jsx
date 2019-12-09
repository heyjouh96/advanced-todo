import React, { useContext } from 'react';

import { DashboardContext } from '../../contexts/dashboard.context';

// styles
import {
  OptionsContainer,
  ColorsGrid,
  ColorCard,
} from './styles';

function Options() {

  const { dispatch } = useContext(DashboardContext);

  const changeBgColor = color => dispatch({ type: 'changeBg', payload: color });

  return (
    <OptionsContainer>
      <h2>Options</h2>

      <ColorsGrid>
        <ColorCard bgColor="#ff3b30" onClick={() => changeBgColor('#ff3b30')} />
        <ColorCard bgColor="#007bff" onClick={() => changeBgColor('#007bff')} />
        <ColorCard bgColor="#34c759" onClick={() => changeBgColor('#34c759')} />
      </ColorsGrid>
    </OptionsContainer>
  );
}

export default Options;
