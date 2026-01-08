import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export type NavigationDirection = 'forward' | 'backward' | 'none';

// Define route depth to determine navigation direction
const routeDepth: Record<string, number> = {
  '/': 0,
  '/freight/:id': 1,
  '/freight/:freightId/chat/:contactId': 2,
  '/freight/:freightId/chat/:contactId/documents': 3,
  '/freight/:freightId/chat/:contactId/confirm': 3,
};

function getRouteDepth(pathname: string): number {
  // Exact match
  if (routeDepth[pathname] !== undefined) {
    return routeDepth[pathname];
  }

  // Pattern matching
  if (pathname === '/') return 0;
  if (/^\/freight\/[^/]+$/.test(pathname)) return 1;
  if (/^\/freight\/[^/]+\/chat\/[^/]+$/.test(pathname)) return 2;
  if (/^\/freight\/[^/]+\/chat\/[^/]+\/(documents|confirm)$/.test(pathname)) return 3;

  return 0;
}

export function useNavigationDirection(): NavigationDirection {
  const location = useLocation();
  const prevDepthRef = useRef<number>(0);
  const directionRef = useRef<NavigationDirection>('none');

  useEffect(() => {
    const currentDepth = getRouteDepth(location.pathname);
    
    if (currentDepth > prevDepthRef.current) {
      directionRef.current = 'forward';
    } else if (currentDepth < prevDepthRef.current) {
      directionRef.current = 'backward';
    } else {
      directionRef.current = 'none';
    }

    prevDepthRef.current = currentDepth;
  }, [location.pathname]);

  return directionRef.current;
}
