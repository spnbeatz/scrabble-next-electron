declare global {
    interface Window {
      electron: {
        resizeWindow: (width: number, height: number) => void;
        closeWindow: () => void
      };
    }
  }
  
  export {};