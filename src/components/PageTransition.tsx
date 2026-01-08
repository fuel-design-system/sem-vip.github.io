import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigationDirection, NavigationDirection } from '../hooks/useNavigationDirection';
import './PageTransition.scss';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const direction = useNavigationDirection();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit' | 'none'>('none');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exit');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'exit') {
      setDisplayLocation(location);
      setTransitionStage('enter');
    } else if (transitionStage === 'enter') {
      setTransitionStage('none');
    }
  };

  const getTransitionClass = (): string => {
    if (transitionStage === 'none') return 'page-transition';
    
    if (transitionStage === 'exit') {
      return direction === 'backward' 
        ? 'page-transition page-exit-backward' 
        : 'page-transition page-exit-forward';
    }
    
    if (transitionStage === 'enter') {
      return direction === 'backward' 
        ? 'page-transition page-enter-backward' 
        : 'page-transition page-enter-forward';
    }

    return 'page-transition';
  };

  return (
    <div 
      className={getTransitionClass()}
      onAnimationEnd={handleAnimationEnd}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  );
}
