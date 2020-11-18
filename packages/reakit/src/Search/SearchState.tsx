import * as React from "react";
import {
  useSealedState,
  SealedInitialState,
} from "reakit-utils/useSealedState";
import { PopoverStateReturn, usePopoverState } from "reakit/Popover";
import {
  unstable_IdState,
  unstable_IdActions,
  unstable_IdInitialState,
  unstable_useIdState,
} from "../Id/IdState";

export type SearchState = unstable_IdState & {
  /**
   * Whether it's visible or not.
   */
  visible: boolean;
};

export type SearchActions = unstable_IdActions & {
  /**
   * Changes the `visible` state to `true`
   */
  show: () => void;
  /**
   * Changes the `visible` state to `false`
   */
  hide: () => void;
  /**
   * Sets `visible`.
   */
  setVisible: React.Dispatch<React.SetStateAction<SearchState["visible"]>>;
};

export type SearchInitialState = unstable_IdInitialState;

export type SearchStateReturn = SearchState &
  SearchActions &
  PopoverStateReturn;

export function useSearchState(
  initialState: SealedInitialState<SearchInitialState> = {}
): SearchStateReturn {
  const { ...sealed } = useSealedState(initialState);

  const popover = usePopoverState(initialState);

  const id = unstable_useIdState(sealed);

  return {
    ...id,
    ...popover,
  };
}
