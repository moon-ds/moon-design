/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled, { CSSObject } from '@emotion/styled';
import { IconSearch } from '@heathmont/sportsbet-icons';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import {
  colors,
  border,
  base,
  typography,
  breakpoints,
} from '@heathmont/sportsbet-tokens';

const searchBox: CSSObject = {
  border: 0,
  //   padding: '0.5rem 0.5rem 0.5rem 0',
  padding: spacing('small'),
  flex: 1,
  backgroundColor: colors.neutral[60],
  fontFamily: typography.fontFamily,
  fontSize: base.fontSize,
  fontWeight: typography.fontWeight.normal,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: colors.neutral[20],
  '&::placeholder': {
    color: colors.neutral[20],
  },
};

const SearchContainer = styled.form({
  width: '100%',
  display: 'inline-flex',
  flex: '1 1 auto',
  alignItems: 'center',
  border: `${border.width}px solid ${colors.neutral[50]}`,
  borderRadius: rem(100),
  overflow: 'hidden',
  backgroundColor: colors.neutral[60],
  color: colors.neutral[20],
  // order: 6,
  minWidth: rem(350),
  [mq(breakpoints.medium)]: {
    // TODO
    // order: 'initial',
    minWidth: rem(150),
  },
});

const iconSearch: CSSObject = {
  marginTop: spacing('small'),
  marginBottom: spacing('small'),
  marginLeft: spacing(),
  marginRight: spacing(),
};

type SearchProps = {
  placeholder: string;
  onSubmit: (e: any) => any;
};

export const Search: React.FC<SearchProps> = ({ placeholder, onSubmit }) => {
  return (
    <SearchContainer onSubmit={onSubmit}>
      <IconSearch css={iconSearch} />
      <input
        css={searchBox}
        type="search"
        name="search"
        placeholder={placeholder}
      />
      <input type="submit" hidden />
    </SearchContainer>
  );
};