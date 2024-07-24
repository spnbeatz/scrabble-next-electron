import React, { useEffect, useState } from "react";

export const Settings = () => {

    const [ screenSize, setScreenSize ] = useState({width: 800, height: 600});
    const [ screenSizeValue, setScreenSizeValue ] = useState<string>("");

    useEffect(()=> {
        switch (screenSizeValue) {
            case "sm":
                setScreenSize({width: 800, height: 600});
                return;
            case "md":
                setScreenSize({width: 1200, height: 800})
                return;
            default:
                setScreenSize({width: 800, height: 600})
                return;
            
        }
    },[screenSizeValue]);

    useEffect(()=>{
        if (window.electron && typeof window.electron.closeWindow === 'function') {
            window.electron.resizeWindow(screenSize.width, screenSize.height);
          } else {
            console.error('Electron API is not available or close function is not defined');
          }
    },[screenSize])

    return (
        <div className="absolute left-0 top-0 w-screen h-screen bg-black">
            <select value={screenSizeValue} onChange={(e) => setScreenSizeValue(e.target.value)}>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
            </select>
        </div>
    )

}