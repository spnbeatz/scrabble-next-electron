export const defaultLayoutIconSize = (width: number) => {
    if (width < 800) return '15px'
    if (width > 800 && width < 1200) return '25px'
    if (width > 1200) return '35px'
}