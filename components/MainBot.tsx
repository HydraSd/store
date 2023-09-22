"use client";
import React, { useEffect } from 'react';

// Your component definition here

export default function MyChatComponent() {
  useEffect(() => {
    // The JavaScript code you provided
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        // @ts-ignore
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with RedMix",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "8823f3b5-f894-4edc-8ea3-6d079a194419",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "8823f3b5-f894-4edc-8ea3-6d079a194419",
        "lazySocket": true,
        "botName": "RedMix",
        "frontendVersion": "v1",
        "showPoweredBy": true
      });
    };

    // Clean up the script tag when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div></div>
  );
}

