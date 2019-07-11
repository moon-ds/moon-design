import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import {
  userPortalContainer,
  userPortalContainerInner,
} from '../../../shared/container';

export const FreeBetsWrapper: React.FC<{ badgeClosed?: boolean }> = styled.div({
  ...userPortalContainer,
  ...userPortalContainerInner,
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: spacing(),
  [mq(breakpoints.medium)]: {
    gridTemplateColumns: '1fr 1fr',
    columnGap: spacing('medium'),
    rowGap: spacing('medium'),
  },
  [mq(breakpoints.medium, 'max-width')]: {
    padding: 0,
  },
});

export const FreeBet: React.FC<{ inActive?: boolean }> = styled.div({
  paddingTop: spacing('large'),
  paddingLeft: spacing('medium'),
  paddingRight: spacing('medium'),
  paddingBottom: spacing('medium'),
  borderTop: `${rem(1)} solid ${colors.neutral[70]}`,
  borderBottom: `${rem(1)} solid ${colors.neutral[70]}`,
  position: 'relative',
  [mq(breakpoints.medium)]: {
    border: `${rem(1)} solid ${colors.neutral[70]}`,
    borderRadius: rem(4),
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
  },
  Button: {
    marginTop: spacing('medium'),
  },
});

export const FreeBetCaption = styled.p({
  marginTop: spacing('small'),
  color: colors.neutral[20],
});

export const FreeBetInfoContainer = styled.div({
  marginTop: spacing(),
  paddingTop: spacing('small'),
  paddingBottom: spacing(),
  borderTop: `${rem(1)} solid ${colors.neutral[70]}`,
  borderBottom: `${rem(1)} solid ${colors.neutral[70]}`,
  display: 'flex',
  flexWrap: 'wrap',
});

export const FreeBetInfo = styled.div({
  marginRight: spacing(),
  minWidth: rem(180),

  '& > p': {
    color: colors.neutral[10],
    fontSize: rem(16),
    marginTop: spacing('xsmall'),

    '& > span': {
      fontSize: rem(12),
      color: colors.neutral[20],
    },
  },

  '& > span': {
    color: colors.neutral[20],
    fontSize: rem(12),
  },
});
