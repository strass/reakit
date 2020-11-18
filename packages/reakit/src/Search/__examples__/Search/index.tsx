import * as React from "react";
import { SearchDisclosure } from "reakit/Search/SearchDisclosure";
import { SearchInput } from "reakit/Search/SearchInput";
import { useSearchState } from "reakit/Search/SearchState";

export default function SearchTest() {
  const search = useSearchState();

  console.log("?", search);

  return (
    <>
      <SearchInput {...search}>
        {(props) => {
          console.log(props);
          return <SearchInput {...props} />;
        }}
      </SearchInput>
      <SearchDisclosure {...search}>Foo</SearchDisclosure>
    </>
  );
}
