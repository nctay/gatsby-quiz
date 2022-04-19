import React from 'react'
import styled from 'styled-components'
import SelectSearch, { SelectSearchProps } from 'react-select-search'

export const Select: React.FC<SelectSearchProps & { error?: boolean; errorMessage?: string }> = ({
  error,
  errorMessage,
  ...props
}) => {
  return (
    <Wrapper error={error}>
      <SelectSearch {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{ error?: boolean }>`
  width: 307px;
  margin: 0 auto;
  border: none;
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
    border: ${({ error }) => (error ? '1px solid tomato' : '1px solid #000000')};
    box-shadow: ${({ error }) =>
      error ? '0 4px 4px rgba(255,100,70,0.25)' : '0 4px 4px rgba(0, 0, 0, 0.25)'};
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
    right: 19px;
    width: 11px;
    height: 11px;
  }

  /**
   * Input
   */
  .select-search__input {
    background: #fbfbfb;
    border-radius: 10px;
    display: block;
    width: 100%;
    max-width: 307px;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
    outline: none;
    font-size: 14px;
    line-height: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
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
    height: 30px;
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
    z-index: 2;
    top: 50px;
    right: 0;
    left: 0;
    border-radius: 10px;
    overflow: auto;
    max-height: 200px;
  }
`
