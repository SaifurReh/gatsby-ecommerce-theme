import React from 'react';
import { NotificationProvider } from './src/context/AddItemNotificationProvider';

// Function to add AdSense script to the document head
const addAdSenseScript = () => {
  const script = document.createElement('script');
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5419128939391540";
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};

export const wrapRootElement = ({ element }) => {
  React.useEffect(() => {
    addAdSenseScript();
  }, []);

  return <NotificationProvider>{element}</NotificationProvider>;
};

