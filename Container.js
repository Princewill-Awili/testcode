import React, {useContext, useEffect} from 'react';
import { stateContext } from './context';
import Banner from './Banner';



const Container = () => {

        const { showBanner, updateShowBanner } = useContext(stateContext);

        useEffect(()=>{
            window.localStorage.setItem("showBanner", JSON.stringify(showBanner));
        },[showBanner]);

        useEffect(()=>{
            const data = window.localStorage.getItem("showBanner");
            console.log('data', data);
            console.log('showBanner', showBanner);
            if(data !== null) updateShowBanner(JSON.parse(data));
        });

        return (
            <div>
                {showBanner && <Banner/>}
            </div>
        )
}

export default Container