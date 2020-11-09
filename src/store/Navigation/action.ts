import { SelfNavigationStore } from ".";

const openOrCloseNavigation = (self: SelfNavigationStore) => () => {
  self._isOpened = !self._isOpened;
};

export const navigationActions = (self: any) => ({
  openOrCloseNavigation: openOrCloseNavigation(self),
});
