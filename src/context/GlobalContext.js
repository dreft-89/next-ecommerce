import React, { createContext, useContext, useReducer } from 'react';
import { globalReducer } from '../reducers';

export const initialState = {
         products: [
           {
             id: "1",
             name: "Nintendo Wii",
             price: "$150",
             descrition:
               "Wii is a home console from Nintendo. Launched in 2006, it introduced motion controlled gaming to a wide audience of Nintendo fans and people who didn't traditionally play video games. A value model of Wii, Wii mini, was launched in 2013, allowing a new audience to enjoy Wii software.",
             image: "../../public/nintendo WII.png",
           },
           {
             id: "2",
             name: "xBox One X",
             price: "$450",
             descrition:
               "Xbox One X is a premium 4K HDR console with a storage issue. The Xbox One X does what no console has done before: native 4K HDR gaming. Memory issues aside, the Xbox One X fulfills the promise of 4K HDR gaming and offers the most premium gaming experience on a console, bar none.",
             image: "../../public/xbo-one-X.jpg",
           },
           {
             id: "3",
             name: "xBox One S",
             price: "$250",
             descrition:
               "The Xbox One S offers a sleek, compact, and 4K video-capable alternative to the original Xbox One, which has been discontinued. With multiple bundles sporting a variety of storage capacities and packed-in games, the Xbox One S is a great option for anyone looking to pick up an Xbox system for the first time.",
             image: "../../public/xboxs.jpg",
           },
           {
             id: "4",
             name: "PS4 PRO 500Gb",
             price: "$600",
             descrition:
               "Look for the ‘PS4 Pro Enhanced’ icon on software packaging. PS4 Pro plays all PS4 format games. ‘PS4 Pro Enhanced’ features vary by game. Select titles may have enhanced visuals, frame rate, HDR 10 support, or increases in resolution. Select features depend on the type of display connected to PS4 Pro. Vertical stand sold separately. 4K Entertainment requires access to a 4K compatible content streaming service, a robust internet connection, and a compatible 4K display.",
             image: "../../public/ps4pro.jpg",
           },
           {
             id: "5",
             name: "Tetris",
             price: "$999",
             descrition: "old school",
             image: "../../public/tetris.jpg",
           },
           {
             id: "6",
             name: "PS 5 ",
             price: "$1505",
             descrition: "Description",
             image: "../../public/Nintendo.jpg",
           },
         ],
         cart: [],
         wishlist: [],
       };

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

function useGlobalState() {
    const context = useContext(GlobalStateContext)
    
    if( context === undefined) {
        throw new Error("useGlobalState must be used GlobalProvider");
    }

    return context;
}

function useGlobalDispatch() {
    const context = useContext(GlobalDispatchContext)
    
    if( context === undefined) {
        throw new Error("useGlobalDispatch must be used GlobalProvider");
    }

    return context;
}

export const useGlobal = () => [ useGlobalState(), useGlobalDispatch() ];

export const GlobalProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState);

    return (
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
          {children}
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    );
}
