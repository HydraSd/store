"use client";
import React, { useEffect } from 'react'

type Props = {}

function Bot({}: Props) {
    useEffect(() => {
        // JavaScript code to include in the head of the document
        (function (w, d, s, o, f, js, fjs) {
          // @ts-ignore
          w["botsonic_widget"] = o;
          // @ts-ignore
          w[o] =
           // @ts-ignore
            w[o] ||
            function () {
              // @ts-ignore
              (w[o].q = w[o].q || []).push(arguments);
            };
             // @ts-ignore
          (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
          // @ts-ignore
          js.id = o;
           // @ts-ignore
          js.src = f;
           // @ts-ignore
          js.async = 1;
           // @ts-ignore
          fjs.parentNode.insertBefore(js, fjs);
        })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
         // @ts-ignore
        Botsonic("init", {
          serviceBaseUrl: "https://api.botsonic.ai",
          token: "4e172c13-27f8-4950-a609-759ff7bcd00e",
        });
      }, []);
  return (
    <div></div>
  )
}

export default Bot