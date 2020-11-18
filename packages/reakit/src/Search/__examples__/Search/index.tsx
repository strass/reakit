import * as React from "react";
import { Button } from "reakit/Button";
import { Disclosure } from "reakit/Disclosure";
import { Group } from "reakit/Group";
import { SearchDisclosure } from "reakit/Search/SearchDisclosure";
import { SearchInput } from "reakit/Search/SearchInput";
import { useSearchState } from "reakit/Search/SearchState";

export default function SearchTest() {
  const search = useSearchState();
  console.log(search);
  // focus management
  return (
    <>
      <Group>
        <SearchInput {...search} />
        <Disclosure {...search}>o</Disclosure>
      </Group>
      <SearchDisclosure {...search}>
        {search.value || "empty"}
        <Button />
      </SearchDisclosure>
    </>
  );
}
