// import { minWidth } from '@mui/system';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function ReactResponsiveHook() {
    const [isClient, setIsClient] = useState(false);

    const isMobile = useMediaQuery({
        // minWidth: '768px'
        minWidth: '925px'
    });

    const isTablet = useMediaQuery({
        // minWidth: '768px'
        minWidth: '1280px'
    });

    const isDesktop = useMediaQuery({
        // minWidth: '1024px'
        minWidth: '1366px'
    });

    useEffect(() => {
        if (typeof window !== 'undefined') setIsClient(true);
    }, []);

    return {
        isDesktop: isClient ? isDesktop : true,
        isTablet: isClient ? isTablet : false,
        isMobile: isClient ? isMobile : false

        // isOnlyMobile: isClient ? isOnlyMobile : false
    };
}

export default ReactResponsiveHook;
