import * as React from "react";
import {
  useSealedState,
  SealedInitialState,
} from "reakit-utils/useSealedState";
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

export type SearchStateReturn = SearchState & SearchActions;

export function useSearchState(
  initialState: SealedInitialState<SearchInitialState> = {}
): SearchStateReturn {
  const { ...sealed } = useSealedState(initialState);

  const [visible, setVisible] = React.useState(false);

  const id = unstable_useIdState(sealed);

  const show = React.useCallback(() => setVisible(true), []);
  const hide = React.useCallback(() => setVisible(false), []);

  return {
    ...id,
    visible,
    show,
    hide,
    setVisible,
  };
}
