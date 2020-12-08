import propTypes from 'prop-types';

export default function SearchBar({ onSubmitForm, onChangeQuery }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => onSubmitForm(e)}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => onChangeQuery(e)}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmitForm: propTypes.func.isRequired,
  onChangeQuery: propTypes.func.isRequired,
};
