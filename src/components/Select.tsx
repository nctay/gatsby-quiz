import React from 'react'
import styled from 'styled-components'
import SelectSearch, { SelectSearchProps } from 'react-select-search'
import { Typography } from './Typography'

export const Select: React.FC<SelectSearchProps & { error?: boolean; errorMessage?: string }> = ({
  error,
  errorMessage,
  ...props
}) => {
  return (
    <Wrapper error={error}>
      <SelectSearch {...props} />
      {errorMessage && (
        <Typography
          fontSize={12}
          lineHeight={14}
          color="red"
          display="block"
          textAlign="center"
          style={{ width: '100%' }}
        >
          {errorMessage}
        </Typography>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ error?: boolean }>`
  width: 100%;
  /**
   * Main wrapper
   */
  .select-search {
    width: 100%;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }

  .select-search__input {
    border: ${({ error }) => (error ? '1px solid red' : '0.01rem solid rgba(0, 0, 0, 0.1)')};
    :hover {
      border: ${({ error }) => (error ? '1px solid red' : '0.01rem solid rgba(0, 0, 0, 0.2)')};
    }
    :focus {
      border: ${({ error }) => (error ? '1px solid red' : '0.01rem solid rgba(0, 0, 0, 0.3)')};
    }
  }
  .select-search *,
  .select-search *::after,
  .select-search *::before {
    box-sizing: inherit;
  }

  /**
   * Value wrapper
   */
  .select-search__value {
    position: relative;
    z-index: 1;
  }

  .select-search__value::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(50% - 9px);
    right: 22px;
    width: 11px;
    height: 11px;
  }

  /**
   * Input
   */
  .select-search__input {
    background: white;
    display: block;
    width: 100%;
    margin: 0 auto;
    outline: none;
    height: 0.48rem;
    font-size: 16px;
    line-height: 28px;
    border-radius: 0.1rem;
    padding: 0.15rem 0.2rem;
  }

  .select-search__input::-webkit-search-decoration,
  .select-search__input::-webkit-search-cancel-button,
  .select-search__input::-webkit-search-results-button,
  .select-search__input::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .select-search__input:not([readonly]):focus {
    cursor: initial;
  }

  /**
   * Options wrapper
   */
  .select-search__select {
    background: #fff;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
  }

  /**
   * Options
   */
  .select-search__options {
    list-style: none;
  }

  /**
   * Option row
   */
  .select-search__row:not(:first-child) {
    border-top: 1px solid #eee;
  }

  /**
   * Option
   */
  .select-search__option,
  .select-search__not-found {
    display: block;
    height: 0.35rem;
    width: 100%;
    padding: 0 16px;
    background: #fff;
    border: none;
    outline: none;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  }

  .select-search__option.is-selected {
    background: #4169e1;
    color: #fff;
  }

  .select-search__option.is-highlighted,
  .select-search__option:not(.is-selected):hover {
    background: rgba(65, 105, 225, 0.1);
  }

  .select-search__option.is-highlighted.is-selected,
  .select-search__option.is-selected:hover {
    background: #4169e1;
    color: #fff;
  }

  .select-search:not(.is-disabled) .select-search__input {
    cursor: pointer;
  }

  /**
   * Modifiers
*/
  .select-search:not(.is-loading):not(.select-search--multiple) .select-search__value::after {
    transform: rotate(45deg);
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    pointer-events: none;
  }

  .select-search:not(.select-search--multiple) .select-search__select {
    position: absolute;
    z-index: 5;
    top: 50px;
    right: 0;
    left: 0;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: auto;
  }
`
