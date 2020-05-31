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
             image: "/nintendo WII.webp",
             images: [
               {
                 src: "/nintendo WII.webp",
                 alt: "Nintendo Wii",
               },
               {
                 src: "/NW1.jpg",
                 alt: "xBox One X",
               },
               {
                 src: "/NW2.jpg",
                 alt: "Controler",
               },
               {
                 src: "/NW3.jpg",
                 alt: "Wii",
               },
             ],
           },
           {
             id: "2",
             name: "xBox One X",
             price: "$450",
             descrition:
               "Xbox One X is a premium 4K HDR console with a storage issue. The Xbox One X does what no console has done before: native 4K HDR gaming. Memory issues aside, the Xbox One X fulfills the promise of 4K HDR gaming and offers the most premium gaming experience on a console, bar none.",
             image: "/xbo-one-X.webp",
             images: [
               {
                 src: "/xbo-one-X.webp",
                 alt: "xBox one X",
               },
               {
                 src: "/XX1.png",
                 alt: "xBox one X",
               },
               {
                 src: "/XX2.png",
                 alt: "xBox one X",
               },
               {
                 src: "/XX3.png",
                 alt: "xBox one X",
               },
             ],
           },
           {
             id: "3",
             name: "xBox One S",
             price: "$250",
             descrition:
               "The Xbox One S offers a sleek, compact, and 4K video-capable alternative to the original Xbox One, which has been discontinued. With multiple bundles sporting a variety of storage capacities and packed-in games, the Xbox One S is a great option for anyone looking to pick up an Xbox system for the first time.",
             image: "/s1.png",
             images: [
               {
                 src: "/s1.png",
                 alt: "xbox one S",
               },
               {
                 src: "/s2.png",
                 alt: "xbox one S",
               },
               {
                 src: "/s3.png",
                 alt: "xbox one S",
               },
               {
                 src: "/s4.png",
                 alt: "xbox one S",
               },
             ],
           },
           {
             id: "4",
             name: "Sony Playstation 4 Slim",
             price: "$380",
             descrition:
               "Look for the ‘PS4 Slim Enhanced’ icon on software packaging. PS4 Pro plays all PS4 format games. ‘PS4 Pro Enhanced’ features vary by game. Select titles may have enhanced visuals, frame rate, HDR 10 support, or increases in resolution. Select features depend on the type of display connected to PS4 Pro. Vertical stand sold separately. 4K Entertainment requires access to a 4K compatible content streaming service, a robust internet connection, and a compatible 4K display.",
             image: "/PsS1.png",
             images: [
               {
                 src: "/PsS1.png",
                 alt: "Sony Playstation",
               },
               {
                 src: "/PsS2.png",
                 alt: "Sony Playstation",
               },
               {
                 src: "/PsS3.png",
                 alt: "Dual Shock",
               },
               {
                 src: "/PsS4.png",
                 alt: "Dual Shock",
               },
             ],
           },
           {
             id: "5",
             name: "Nintendo Switch",
             price: "$195",
             descrition: "Description",
             image: "/NS1.jpg",
             images: [
               {
                 src: "/NS1.jpg",
                 alt: "Nintendo Switch",
               },
               {
                 src: "/NS2.jpg",
                 alt: "Nintendo Switch",
               },
               {
                 src: "/NS3.jpg",
                 alt: "Nintendo Switch",
               },
               {
                 src: "/NS4.jpg",
                 alt: "Nintendo Switch",
               },
               {
                 src: "/NS5.jpg",
                 alt: "Nintendo Switch",
               },
               {
                 src: "/NS6.jpg",
                 alt: "Nintendo Switch",
               },
             ],
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
