import * as React from "react";
import { SearchDisclosure } from "reakit/Search/SearchDisclosure";
import { SearchInput } from "reakit/Search/SearchInput";

export default function InputWithPasswordToggle() {
  const [inputType, setInputType] = React.useState("password");

  return (
    <>
      <SearchInput>
        {(props) => {
          console.log(props);
          return <SearchInput {...props} />;
        }}
      </SearchInput>
      <SearchDisclosure />
    </>
  );
}
