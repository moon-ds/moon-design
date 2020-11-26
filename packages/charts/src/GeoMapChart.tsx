import React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

import { Panel } from './private/Panel';
import { Header } from './private/Header';
import ChartIcons from './ChartIcons';
import { VerticalBar } from './private/VerticalBar';
import { Map } from './private/Map';

const Container = styled.div({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
});

type Props = {
  title: string;
  data: {
    label: string | React.ReactNode;
    code: string;
    value: number;
  }[];
  onUpdate?: () => {};
  onShare?: () => {};
  onExpand?: () => {};
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: any;
  compact?: boolean;
  color?: ColorProps;
};

const GeoMapChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.Countries />,
  compact = false,
  color = 'krillin.100',
}) => {
  const theme = useTheme();
  const mainColor = themed('color', color)(theme);
  const maxValue = Math.max.apply(null, data.map(({ value }) => value));
  const preparedData = data.map(item => ({
    ...item,
    percent: (item.value / maxValue) * 100,
    opacity:
      item.value / maxValue < 0.2 ? 0.2 : +(item.value / maxValue).toFixed(2),
  }));

  return (
    <Panel
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header icon={icon} title={title} filter={filter} />
        <Container>
          <VerticalBar data={preparedData} color={mainColor} />
          {!compact && <Map data={preparedData} color={mainColor} />}
        </Container>
      </>
    </Panel>
  );
};

export default GeoMapChart;