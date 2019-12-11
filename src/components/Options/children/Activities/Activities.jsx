import React, { useContext } from 'react';

import { DashboardContext } from '../../../../contexts/dashboard.context';

// styles
import {
  ActivitiesContainer,
  ActivitiesList,
  Activity,
} from './styles';

function Activities() {

  const { state } = useContext(DashboardContext);

  const renderActivityText = (activity) => {
    
    const text = {
      add: () => <span>Adicionou o item <b>{activity.taskId}</b></span>,
      update: () => <span>Editou o item <b>{activity.taskId}</b></span>,
      delete: () => <span>Excluiu o item <b>{activity.taskId}</b></span>,
    }

    return text[activity.type]() || text.default;
  }

  return (
    <ActivitiesContainer>
      <h3>Last activities</h3>

      <ActivitiesList>
        { state.lastActivities.map((activity) => (
          <Activity>
            {renderActivityText(activity)}
          </Activity>
        ))}
      </ActivitiesList>
    </ActivitiesContainer>
  );
}

export default Activities;
