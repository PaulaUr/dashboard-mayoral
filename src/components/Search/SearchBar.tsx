import { SearchContainer, SearchInput } from './SearchBar.styles';

export const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        className="search-box-input"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};
