import { atom } from 'recoil';

//----------------------------------------
// atom
//----------------------------------------
export const indexAtom = atom<string>({
  key: 'key',
  default: ''
});
