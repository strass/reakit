import * as React from "react";
import { SearchDisclosure } from "reakit/Search/SearchDisclosure";
import { SearchInput } from "reakit/Search/SearchInput";
import { useSearchState } from "reakit/Search/SearchState";

export default function SearchTest() {
  const [value, setValue] = React.useState("");
  const search = useSearchState();
  console.log(search);
  return (
    <>
      <SearchInput
        {...search}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchDisclosure {...search}>{value || "empty"}</SearchDisclosure>
    </>
  );
}
