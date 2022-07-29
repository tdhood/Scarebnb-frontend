import { useContext } from "react";
import userContext from "./userContext";
import React from "react";

/**Shows homepage
 *
 * useContext= user
 * props=none
 * state=none
 *
 * Routes --> Homepage
 */

function Homepage() {
    console.log('homepage')
    const [ listings, setListing ] = useState({
        data: null,
        isLoading: true,
    });



}