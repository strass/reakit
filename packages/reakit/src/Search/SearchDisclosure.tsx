import * as React from "react";
import { createComponent } from "reakit-system/createComponent";
import { createHook } from "reakit-system/createHook";
import { shallowEqual } from "reakit-utils/shallowEqual";
import { useDisclosureContent } from "reakit/Disclosure";
import { SEARCH_DISCLOSURE_KEYS } from "./__keys";

export type SearchDisclosureOptions = {
  /**
   * Options passed to `reakit-system-*`
   * @private
   */
  unstable_system?: any;
  visible: boolean;
};

export type SearchDisclosureHTMLProps = React.HTMLAttributes<any> &
  React.RefAttributes<any> & {
    /**
     * Function returned by the hook to wrap the element to which html props
     * will be passed.
     */
    wrapElement?: (element: React.ReactNode) => React.ReactNode;
  };

export type SearchDisclosureProps = SearchDisclosureOptions &
  SearchDisclosureHTMLProps;

export const useSearchDisclosure = createHook<
  SearchDisclosureOptions,
  SearchDisclosureHTMLProps
>({
  name: "SearchDisclosure",
  compose: useDisclosureContent,
  keys: SEARCH_DISCLOSURE_KEYS,
  propsAreEqual(prev, next) {
    const { unstable_system: prevSystem, ...prevProps } = prev;
    const { unstable_system: nextSystem, ...nextProps } = next;
    if (prevSystem !== nextSystem && !shallowEqual(prevSystem, nextSystem)) {
      return false;
    }
    return shallowEqual(prevProps, nextProps);
  },
});

export const SearchDisclosure = createComponent({
  as: "aside",
  useHook: useSearchDisclosure,
});
