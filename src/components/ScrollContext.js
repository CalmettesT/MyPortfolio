import { createContext, useContext } from 'react';

const ScrollContext = createContext(null);

export const useScroll = () => useContext(ScrollContext);
export default ScrollContext;

