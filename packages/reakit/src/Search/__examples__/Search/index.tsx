import * as React from "react";
import { Disclosure } from "reakit/Disclosure";
import { Group } from "reakit/Group";
import { Menu, MenuItem } from "reakit/Menu";
import { SearchInput } from "reakit/Search/SearchInput";
import { useSearchState } from "reakit/Search/SearchState";

export default function SearchTest() {
  const search = useSearchState();

  // focus management
  return (
    <>
      <Group>
        <SearchInput {...search} />
        <Disclosure {...search}>o</Disclosure>
      </Group>
      <Menu {...search}>
        {[...search.value].map((l, i) => (
          <MenuItem {...search} key={i}>
            {l}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
