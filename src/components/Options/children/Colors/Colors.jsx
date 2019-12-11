import React, { useContext } from 'react';

import { DashboardContext } from '../../../../contexts/dashboard.context';

// styles
import {
  ColorsContainer,
  ColorsGrid,
  ColorCard,
} from './styles';

function Colors() {

  const { dispatch } = useContext(DashboardContext);

  const changeBgColor = color => dispatch({ type: 'changeBg', payload: color });

  return (
    <ColorsContainer>
      <h3>Colors</h3>

      <ColorsGrid>
        <ColorCard bgColor="#ff3b30" onClick={() => changeBgColor('#ff3b30')} />
        <ColorCard bgColor="#007bff" onClick={() => changeBgColor('#007bff')} />
        <ColorCard bgColor="#34c759" onClick={() => changeBgColor('#34c759')} />
      </ColorsGrid>
    </ColorsContainer>
  );
}

export default Colors;
