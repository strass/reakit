import * as React from "react";
import { createComponent } from "reakit-system/createComponent";
import { createHook } from "reakit-system/createHook";
import { shallowEqual } from "reakit-utils/shallowEqual";
import { DisclosureStateReturn, useDisclosure } from "reakit/Disclosure";
import { useInput } from "reakit/Input";
import { SEARCH_INPUT_KEYS } from "./__keys";

export type SearchInputOptions = {
  /**
   * Options passed to `reakit-system-*`
   * @private
   */
  unstable_system?: any;
  value: string;
  setValue: (newValue: string) => void;
} & DisclosureStateReturn;

export type SearchInputHTMLProps = React.HTMLAttributes<any> &
  React.RefAttributes<any> & {
    /**
     * Function returned by the hook to wrap the element to which html props
     * will be passed.
     */
    wrapElement?: (element: React.ReactNode) => React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

export type SearchInputProps = SearchInputOptions & SearchInputHTMLProps;

export const useSearchInput = createHook<
  SearchInputOptions,
  SearchInputHTMLProps
>({
  name: "SearchInput",
  compose: [useDisclosure],
  keys: SEARCH_INPUT_KEYS,
  propsAreEqual(prev, next) {
    const { unstable_system: prevSystem, ...prevProps } = prev;
    const { unstable_system: nextSystem, ...nextProps } = next;
    if (prevSystem !== nextSystem && !shallowEqual(prevSystem, nextSystem)) {
      return false;
    }
    return shallowEqual(prevProps, nextProps);
  },
  useProps(
    options,
    { onChange: htmlOnChange, type = "text", role = "input", ...htmlProps }
  ) {
    console.log(options);
    return {
      ...htmlProps,
      role,
      type,
      value: options.value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        options.setValue(e.target.value);
        htmlOnChange?.(e);
      },
    };
  },
});

export const SearchInput = createComponent({
  as: "input",
  useHook: useSearchInput,
});
