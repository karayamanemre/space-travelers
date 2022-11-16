import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';
import missionsReducer, { showMissions, joinMission } from '../redux/missions/missions';
import missionsData from './missionData';

describe('Mission', () => {
  it('Create mission item', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(Missions).toMatchSnapshot();
  });

  it('Update the state with API data', () => {
    expect(missionsReducer(missionsData, showMissions(missionsData))).toEqual(
      missionsData,
    );
  });

  it('Update the state with correct id to reserved: true', () => {
    const missionId = '8E0A6D0';
    expect(missionsReducer(missionsData, joinMission(missionId))).toEqual(
      missionsData.map((item) => (item.id === missionId ? { ...item, reserved: true } : item)),
    );
  });
});
