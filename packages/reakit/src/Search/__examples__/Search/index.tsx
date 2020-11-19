import * as React from "react";
import { Disclosure } from "reakit/Disclosure";
import { Group } from "reakit/Group";
import { Menu, MenuItem, useMenuState } from "reakit/Menu";
import { Popover } from "reakit/Popover";
import { SearchDisclosure } from "reakit/Search/SearchDisclosure";
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
      <Menu {...menu} unstable_autoFocusOnShow={false}>
        {[...search.value].map((l) => (
          <MenuItem>{l}</MenuItem>
        ))}
      </Menu>
    </>
  );
}
