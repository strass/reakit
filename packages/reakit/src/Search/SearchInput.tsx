import * as React from "react";
import { createComponent } from "reakit-system/createComponent";
import { createHook } from "reakit-system/createHook";
import { shallowEqual } from "reakit-utils/shallowEqual";
import { useDisclosure } from "reakit/Disclosure";
import { useInput } from "reakit/Input";
import { SEARCH_INPUT_KEYS } from "./__keys";

export type SearchInputOptions = {
  /**
   * Options passed to `reakit-system-*`
   * @private
   */
  unstable_system?: any;
};

export type SearchInputHTMLProps = React.HTMLAttributes<HTMLInputElement> &
  React.RefAttributes<any> & {
    /**
     * Function returned by the hook to wrap the element to which html props
     * will be passed.
     */
    wrapElement?: (element: React.ReactNode) => React.ReactNode;
  };

export type SearchInputProps = SearchInputOptions & SearchInputHTMLProps;

export const useSearchInput = createHook<
  SearchInputOptions,
  SearchInputHTMLProps
>({
  name: "SearchInput",
  compose: [useInput, useDisclosure],
  keys: SEARCH_INPUT_KEYS,
  propsAreEqual(prev, next) {
    const { unstable_system: prevSystem, ...prevProps } = prev;
    const { unstable_system: nextSystem, ...nextProps } = next;
    if (prevSystem !== nextSystem && !shallowEqual(prevSystem, nextSystem)) {
      return false;
    }
    return shallowEqual(prevProps, nextProps);
  },
  useProps(_, { type = "text", role = "input", ...htmlProps }) {
    return { ...htmlProps, role, type };
  },
});

export const SearchInput = createComponent({
  as: "input",
  useHook: useSearchInput,
});
