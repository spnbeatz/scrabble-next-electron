'use client';
import React, { useState } from "react";
import { RiShutDownLine } from "react-icons/ri"
import useWindowSize from "../hooks/windowSize";
import { defaultLayoutIconSize } from "../config/iconSizes";
import { IoMdSettings } from "react-icons/io";
import { Settings } from "../components/windows/Settings";

export const DefaultLayout= ({children}: {children: React.ReactNode}) => {

    const { width, height }= useWindowSize();
    const [settingsMenu, setSettingsMenu] = useState<boolean>(false);

    const closeWindow = () => {
        if (window.electron && typeof window.electron.closeWindow === 'function') {
          window.electron.closeWindow();
        } else {
          console.error('Electron API is not available or close function is not defined');
        }
      };

    const openSettingsMenu = () => {
        setSettingsMenu(true);
    }
    return (
        <div className="w-screen h-screen relative overflow-hidden">
            { settingsMenu && <Settings />}
            <div className="w-full h-14 flex flex-row items-center justify-between px-4">
                <div className="h-10 w-10 flex items-center justify-center" onClick={() => closeWindow()}><RiShutDownLine size={defaultLayoutIconSize(width)} /></div>
                <IoMdSettings size={defaultLayoutIconSize(width)} onClick={()=>openSettingsMenu()}/>
                
            </div>
            <div className="w-full h-full">
                
                {children}
            </div>
            
        </div>
    )
}