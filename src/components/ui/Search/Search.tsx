import * as React from 'react';

import './Search.scss';

type SearchProps = {
  value: string;
  onSearch: (query: string) => void;
};

const Search = ({ onSearch, value }: SearchProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      onSearch(inputRef.current.value || '');
    }
  };

  const handleClearClick = () => {
    onSearch('');
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleFormSubmit}>
        <div className="search__form__input-wrapper">
          <input
            className="search__form__input-wrapper__input"
            name="search"
            ref={inputRef}
            type="text"
            defaultValue={value}
            placeholder="Search by name/title"
          />
          <button
            type="button"
            className="search__form__input-wrapper__clear-button"
            onClick={handleClearClick}>
            <div className="material-icons search__form__input-wrapper__clear-button__icon">
              clear
            </div>
          </button>
          <button className=" search__form__input-wrapper__submit-button" type="submit">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
