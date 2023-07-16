import * as React from 'react';
import { Form, useSubmit } from 'react-router-dom';

import './Search.scss';

import { useQuery, useReplaceUrlQuery } from '../../../hooks/useQueryParams';

const Search = () => {
  const query = useQuery();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const submit = useSubmit();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget.form);
  };

  const handleClearClick = (event: React.FormEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      inputRef.current.value = '';
      submit(event.currentTarget.form);
    }
  };

  return (
    <div className="search">
      <Form className="search__form" onSubmit={handleFormSubmit}>
        <div className="search__form__input-wrapper">
          <input
            className="search__form__input-wrapper__input"
            name="q"
            ref={inputRef}
            type="text"
            defaultValue={query.get('q') || ''}
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
      </Form>
    </div>
  );
};

export default Search;
