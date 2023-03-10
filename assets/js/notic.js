/*!Notiflix ('https://www.notiflix.com') -- Version: 2.1.2 -- Author: Furkan MT ('https://github.com/furcan') -- Copyright 2020 Notiflix, MIT Licence ('https://opensource.org/licenses/MIT')*/ !(function (t, e) {
    "function" == typeof define && define.amd
        ? define([], function () {
              return e(t);
          })
        : "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e(t))
        : (t.Notiflix = e(t));
})("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (F) {
    if (void 0 !== F || void 0 !== F.document) {
        function A(t) {
            var e = F.document.createElement("div");
            return (e.innerHTML = t), e.textContent || e.innerText || "";
        }
        function e(t, e) {
            if (!F.document.getElementById("NotiflixQuicksand") && t && e && "string" == typeof e && "quicksand" === e.toLowerCase()) {
                var a = F.document.createRange();
                a.selectNode(F.document.head);
                var n = a.createContextualFragment('<link id="NotiflixGoogleDNS" rel="dns-prefetch" href="//fonts.googleapis.com" />');
                F.document.head.appendChild(n);
                var i = F.document.createRange();
                i.selectNode(F.document.head);
                var o = i.createContextualFragment('<link id="NotiflixQuicksand" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext" rel="stylesheet" />');
                F.document.head.appendChild(o);
            }
        }
        function T(t, e) {
            return console.error("%c " + t + " ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + e + "\nVisit documentation page to learn more: https://www.notiflix.com/documentation");
        }
        function E(t, e) {
            return (
                '<svg stroke="' +
                (e = e || "#32c682") +
                '" width="' +
                (t = t || "60px") +
                '" height="' +
                t +
                '" viewBox="0 0 38 38" style="transform:scale(0.8);" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
            );
        }
        function D(t, e) {
            return (
                '<svg id="NXLoadingHourglass" fill="' +
                (e = e || "#32c682") +
                '" width="' +
                (t = t || "60px") +
                '" height="' +
                t +
                '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@-webkit-keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}@keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}#NXLoadingHourglass *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXhourglass7{fill: inherit;}#NXhourglass1{-webkit-animation-name: NXhourglass1-animation;animation-name: NXhourglass1-animation;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;transform-box: fill-box;}#NXhourglass3{-webkit-animation-name: NXhourglass3-animation;animation-name: NXhourglass3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}#NXhourglass5{-webkit-animation-name: NXhourglass5-animation;animation-name: NXhourglass5-animation;-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}g#NXhourglass5,#NXhourglass3{fill: inherit;opacity: .4;}</style><g id="NXhourglass1" data-animator-group="true" data-animator-type="1"><g id="NXhourglass2"><g id="NXhourglass3" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,132.08 65.62,163.22 134.38,163.22 134.38,132.08 " id="NXhourglass4"/></g><g id="NXhourglass5" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,67.92 65.62,36.78 134.38,36.78 134.38,67.92" id="NXhourglass6"/></g> <path d="M51.14 38.89l8.33 0 0 14.93c0,15.1 8.29,28.99 23.34,39.1 1.88,1.25 3.04,3.97 3.04,7.08 0,3.11 -1.16,5.83 -3.04,7.09 -15.05,10.1 -23.34,23.99 -23.34,39.09l0 14.93 -8.33 0c-2.68,0 -4.86,2.18 -4.86,4.86 0,2.69 2.18,4.86 4.86,4.86l97.72 0c2.68,0 4.86,-2.17 4.86,-4.86 0,-2.68 -2.18,-4.86 -4.86,-4.86l-8.33 0 0 -14.93c0,-15.1 -8.29,-28.99 -23.34,-39.09 -1.88,-1.26 -3.04,-3.98 -3.04,-7.09 0,-3.11 1.16,-5.83 3.04,-7.08 15.05,-10.11 23.34,-24 23.34,-39.1l0 -14.93 8.33 0c2.68,0 4.86,-2.18 4.86,-4.86 0,-2.69 -2.18,-4.86 -4.86,-4.86l-97.72 0c-2.68,0 -4.86,2.17 -4.86,4.86 0,2.68 2.18,4.86 4.86,4.86zm79.67 14.93c0,15.87 -11.93,26.25 -19.04,31.03 -4.6,3.08 -7.34,8.75 -7.34,15.15 0,6.41 2.74,12.07 7.34,15.15 7.11,4.78 19.04,15.16 19.04,31.03l0 14.93 -61.62 0 0 -14.93c0,-15.87 11.93,-26.25 19.04,-31.02 4.6,-3.09 7.34,-8.75 7.34,-15.16 0,-6.4 -2.74,-12.07 -7.34,-15.15 -7.11,-4.78 -19.04,-15.16 -19.04,-31.03l0 -14.93 61.62 0 0 14.93z" id="NXhourglass7"/></g></g></svg>'
            );
        }
        function W(t, e) {
            return (
                '<svg id="NXLoadingCircle" width="' +
                (t = t || "60px") +
                '" height="' +
                t +
                '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50" xml:space="preserve" version="1.1"><style>#NXLoadingCircle{-webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: ' +
                t +
                "; -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; width: " +
                t +
                '; position: absolute; top: 0; left: 0; margin: auto;}.notiflix-loader-circle-path{stroke-dasharray: 150,200; stroke-dashoffset: -10; -webkit-animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; stroke-linecap: round;}@-webkit-keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@-webkit-keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}@keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}</style><circle class="notiflix-loader-circle-path" cx="50" cy="50" r="20" fill="none" stroke="' +
                (e = e || "#32c682") +
                '" stroke-width="2"/></svg>'
            );
        }
        function O(t, e) {
            return (
                '<svg id="NXLoadingArrows" fill="' +
                (e = e || "#32c682") +
                '" width="' +
                (t = t || "60px") +
                '" height="' +
                t +
                '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 128 128" xml:space="preserve"><g><path fill="inherit" fill-opacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1.5s" repeatCount="indefinite"></animateTransform></g></svg>'
            );
        }
        function H(t, e) {
            return (
                '<svg id="NXLoadingDots" fill="' +
                (e = e || "#32c682") +
                '" width="' +
                (t = t || "60px") +
                '" height="' +
                t +
                '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(25 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.239 0.239)"><animateTransform attributeName="transform" type="scale" begin="-0.266s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(50 50)"> <circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.00152 0.00152)"><animateTransform attributeName="transform" type="scale" begin="-0.133s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(75 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.299 0.299)"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g></svg>'
            );
        }
        function P(t, e) {
            return (
                '<svg stroke="' +
                (e = e || "#32c682") +
                '" width="' +
                (t = t || "60px") +
                '" height="' +
                t +
                '" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>'
            );
        }
        function n(t, a, e, n) {
            if (arguments && 4 === arguments.length) {
                S++,
                    (t = t || "Notiflix " + n),
                    I.plainText && (t = A(t)),
                    !I.plainText && t.length > I.messageMaxLength && (j.Notify.Merge({ closeButton: !0, plainText: !1 }), (t = '<b>HTML Tags Error:</b> Your content length is more than "messageMaxLength" option.')),
                    t.length > I.messageMaxLength && (t = t.substring(0, I.messageMaxLength) + "..."),
                    "shadow" === I.fontAwesomeIconStyle && (e.fontAwesomeIconColor = e.background),
                    I.cssAnimation || (I.cssAnimationDuration = 0);
                var i,
                    o = F.document.createElement("div");
                (o.id = C.wrapID),
                    (o.style.width = I.width),
                    (o.style.zIndex = I.zindex),
                    (o.style.opacity = I.opacity),
                    "right-bottom" === I.position
                        ? ((o.style.right = I.distance), (o.style.bottom = I.distance), (o.style.top = "auto"), (o.style.left = "auto"))
                        : "left-top" === I.position
                        ? ((o.style.left = I.distance), (o.style.top = I.distance), (o.style.right = "auto"), (o.style.bottom = "auto"))
                        : "left-bottom" === I.position
                        ? ((o.style.left = I.distance), (o.style.bottom = I.distance), (o.style.top = "auto"), (o.style.right = "auto"))
                        : ((o.style.right = I.distance), (o.style.top = I.distance), (o.style.left = "auto"), (o.style.bottom = "auto")),
                    I.backOverlay &&
                        (((i = F.document.createElement("div")).id = I.ID + "Overlay"),
                        (i.style.width = "100%"),
                        (i.style.height = "100%"),
                        (i.style.position = "fixed"),
                        (i.style.zIndex = I.zindex),
                        (i.style.left = 0),
                        (i.style.top = 0),
                        (i.style.right = 0),
                        (i.style.bottom = 0),
                        (i.style.background = I.backOverlayColor),
                        (i.className = I.cssAnimation ? "with-animation" : ""),
                        (i.style.animationDuration = I.cssAnimation ? I.cssAnimationDuration + "ms" : ""),
                        F.document.getElementById(i.id) || F.document.body.appendChild(i)),
                    F.document.getElementById(o.id) || F.document.body.appendChild(o);
                var r = F.document.createElement("div");
                (r.id = I.ID + "-" + S),
                    (r.className =
                        I.className +
                        " " +
                        e.childClassName +
                        " " +
                        (I.cssAnimation ? "with-animation" : "") +
                        " " +
                        (I.useIcon ? "with-icon" : "") +
                        " nx-" +
                        I.cssAnimationStyle +
                        " " +
                        (I.closeButton && !a ? "with-close-button" : "") +
                        " " +
                        (a && "function" == typeof a ? "with-callback" : "") +
                        " " +
                        (I.clickToClose ? "click-to-close" : "")),
                    (r.style.fontSize = I.fontSize),
                    (r.style.color = e.textColor),
                    (r.style.background = e.background),
                    (r.style.borderRadius = I.borderRadius),
                    I.rtl && (r.setAttribute("dir", "rtl"), r.classList.add("rtl-on")),
                    (r.style.fontFamily = '"' + I.fontFamily + '", sans-serif'),
                    I.cssAnimation && (r.style.animationDuration = I.cssAnimationDuration + "ms");
                var s,
                    l = "";
                if (
                    (I.closeButton &&
                        !a &&
                        (l =
                            '<span class="notify-close-button"><svg class="clck2cls" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 20 20"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.click2close{fill:' +
                            e.notiflixIconColor +
                            '}</style></defs><g><path class="click2close" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),
                    I.useIcon)
                )
                    if (I.useFontAwesome)
                        r.innerHTML =
                            '<i style="color:' +
                            e.fontAwesomeIconColor +
                            "; font-size:" +
                            I.fontAwesomeIconSize +
                            ';" class="nmi wfa ' +
                            e.fontAwesomeClassName +
                            " " +
                            ("shadow" === I.fontAwesomeIconStyle ? "shadow" : "basic") +
                            '"></i><span class="the-message with-icon">' +
                            t +
                            "</span>" +
                            (I.closeButton ? l : "");
                    else
                        (s =
                            "Success" === n
                                ? '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Success{fill:' +
                                  e.notiflixIconColor +
                                  '}</style></defs><g><path id="Notiflix-Icon-Success" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>'
                                : "Failure" === n
                                ? '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Failure{fill:' +
                                  e.notiflixIconColor +
                                  '}</style></defs><g><path id="Notiflix-Icon-Failure" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>'
                                : "Warning" === n
                                ? '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Warning{fill:' +
                                  e.notiflixIconColor +
                                  '}</style></defs><g><path id="Notiflix-Icon-Warning" class="fil0" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>'
                                : "Info" === n
                                ? '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Info{fill:' +
                                  e.notiflixIconColor +
                                  '}</style></defs><g><path id="Notiflix-Icon-Info" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'
                                : ""),
                            (r.innerHTML = s + '<span class="the-message with-icon">' + t + "</span>" + (I.closeButton ? l : ""));
                else r.innerHTML = '<span class="the-message">' + t + "</span>" + (I.closeButton ? l : "");
                if ("left-bottom" === I.position || "right-bottom" === I.position) {
                    var c = F.document.getElementById(o.id);
                    c.insertBefore(r, c.firstChild);
                } else F.document.getElementById(o.id).appendChild(r);
                if (I.useIcon) {
                    var m = F.document.getElementById(r.id).querySelectorAll(".nmi")[0],
                        p = 40;
                    if (I.useFontAwesome) p = Math.round(parseInt(m.offsetHeight));
                    else {
                        var f = m.getBBox();
                        p = Math.round(parseInt(f.width));
                    }
                    var x = F.document.getElementById(r.id).querySelectorAll("span")[0],
                        u = Math.round(x.offsetHeight);
                    u <= p && ((x.style.paddingTop = (p - u) / 2 + "px"), (x.style.paddingBottom = (p - u) / 2 + "px"));
                }
                if (F.document.getElementById(r.id)) {
                    var g,
                        d,
                        b,
                        y = F.document.getElementById(r.id),
                        h = F.document.getElementById(o.id);
                    I.backOverlay && (g = F.document.getElementById(i.id));
                    function w() {
                        y.classList.add("remove"), I.backOverlay && h.childElementCount <= 0 && g.classList.add("remove"), clearTimeout(d);
                    }
                    function k() {
                        F.document.getElementById(r.id) && null !== y.parentNode && y.parentNode.removeChild(y),
                            h.childElementCount <= 0 && null !== h.parentNode && (h.parentNode.removeChild(h), I.backOverlay && null !== g.parentNode && g.parentNode.removeChild(g)),
                            clearTimeout(b);
                    }
                    if (I.closeButton && !a)
                        F.document
                            .getElementById(r.id)
                            .querySelectorAll("span.notify-close-button")[0]
                            .addEventListener("click", function () {
                                w();
                                var t = setTimeout(function () {
                                    k(), clearTimeout(t);
                                }, I.cssAnimationDuration);
                            });
                    ((a && "function" == typeof a) || I.clickToClose) &&
                        y.addEventListener("click", function (t) {
                            a && "function" == typeof a && a(), w();
                            var e = setTimeout(function () {
                                k(), clearTimeout(e);
                            }, I.cssAnimationDuration);
                        }),
                        I.closeButton ||
                            a ||
                            ((d = setTimeout(function () {
                                w();
                            }, I.timeout)),
                            (b = setTimeout(function () {
                                k();
                            }, I.timeout + I.cssAnimationDuration)));
                }
                if (I.showOnlyTheLastOne && 0 < S)
                    for (var v = F.document.querySelectorAll("[id^=" + I.ID + "-]:not([id=" + I.ID + "-" + S + "])"), N = 0; N < v.length; N++) {
                        var z = v[N];
                        null !== z.parentNode && z.parentNode.removeChild(z);
                    }
            } else T("Notiflix Error", "Where is the arguments?");
        }
        function o(t, e, a, n, i, o) {
            (t = t || "Notiflix " + o),
                e ||
                    ("Success" === o
                        ? (e = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein')
                        : "Failure" === o
                        ? (e = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford')
                        : "Warning" === o
                        ? (e = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk')
                        : "Info" === o && (e = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),
                (a = a || "Okay"),
                (n = n || void 0),
                d.plainText && ((t = A(t)), (e = A(e)), (a = A(a))),
                d.plainText ||
                    (t.length > d.titleMaxLength && ((t = "HTML Tags Error"), (e = 'Your Title content length is more than "titleMaxLength" option.'), (a = "Okay")),
                    e.length > d.messageMaxLength && ((t = "HTML Tags Error"), (e = 'Your Message content length is more than "messageMaxLength" option.'), (a = "Okay")),
                    a.length > d.buttonMaxLength && ((t = "HTML Tags Error"), (e = 'Your Button content length is more than "buttonMaxLength" option.'), (a = "Okay"))),
                t.length > d.titleMaxLength && (t = t.substring(0, d.titleMaxLength) + "..."),
                e.length > d.messageMaxLength && (e = e.substring(0, d.messageMaxLength) + "..."),
                a.length > d.buttonMaxLength && (a = a.substring(0, d.buttonMaxLength) + "..."),
                d.cssAnimation || (d.cssAnimationDuration = 0);
            var r = F.document.createElement("div");
            (r.id = y.ID),
                (r.className = d.className),
                (r.style.width = d.width),
                (r.style.zIndex = d.zindex),
                (r.style.borderRadius = d.borderRadius),
                (r.style.fontFamily = '"' + d.fontFamily + '", sans-serif'),
                d.rtl && (r.setAttribute("dir", "rtl"), r.classList.add("rtl-on"));
            var s = "";
            d.backOverlay && (s = '<div class="' + d.className + "-overlay" + (d.cssAnimation ? " with-animation" : "") + '" style="background:' + d.backOverlayColor + ";animation-duration:" + d.cssAnimationDuration + 'ms;"></div>');
            var l,
                c,
                m,
                p,
                f = "";
            if (
                ("Success" === o
                    ? ((p = d.svgSize),
                      (f =
                          '<svg id="NXReportSuccess" fill="' +
                          (i.svgColor || "#32c682") +
                          '" width="' +
                          (p = p || "110px") +
                          '" height="' +
                          p +
                          '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@-webkit-keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportSuccess *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportSuccess4{fill: inherit;-webkit-animation-name: NXReportSuccess4-animation;animation-name: NXReportSuccess4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportSuccess6{fill: inherit;-webkit-animation-name: NXReportSuccess6-animation;animation-name: NXReportSuccess6-animation;opacity: 1;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess3{-webkit-animation-name: NXReportSuccess3-animation;animation-name: NXReportSuccess3-animation;-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess5{-webkit-animation-name: NXReportSuccess5-animation;animation-name: NXReportSuccess5-animation;-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}</style><g id="NXReportSuccess1"><g id="NXReportSuccess2"><g id="NXReportSuccess3" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportSuccess4"/></g><g id="NXReportSuccess5" data-animator-group="true" data-animator-type="2"><path d="M88.27 35.39l-35.47 39.9 -21.37 -17.09c-0.98,-0.81 -2.44,-0.63 -3.24,0.36 -0.79,0.99 -0.63,2.44 0.36,3.24l23.08 18.46c0.43,0.34 0.93,0.51 1.44,0.51 0.64,0 1.27,-0.26 1.74,-0.78l36.91 -41.53c0.86,-0.96 0.76,-2.42 -0.19,-3.26 -0.95,-0.86 -2.41,-0.77 -3.26,0.19z" id="NXReportSuccess6"/></g></g></g></svg>'))
                    : "Failure" === o
                    ? ((m = d.svgSize),
                      (f =
                          '<svg id="NXReportFailure" fill=" ' +
                          (i.svgColor || "#ff5549") +
                          '" width="' +
                          (m = m || "110px") +
                          '" height="' +
                          m +
                          '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportFailure *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportFailure6{fill:inherit;-webkit-animation-name: NXReportFailure6-animation;animation-name: NXReportFailure6-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportFailure5{-webkit-animation-name: NXReportFailure5-animation;animation-name: NXReportFailure5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure3{-webkit-animation-name: NXReportFailure3-animation;animation-name: NXReportFailure3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure4{fill:inherit;-webkit-animation-name: NXReportFailure4-animation;animation-name: NXReportFailure4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}</style><g id="NXReportFailure1"><g id="NXReportFailure2"><g id="NXReportFailure3" data-animator-group="true" data-animator-type="2"><path d="M4.35 34.95c0,-16.82 13.78,-30.6 30.6,-30.6l50.1 0c16.82,0 30.6,13.78 30.6,30.6l0 50.1c0,16.82 -13.78,30.6 -30.6,30.6l-50.1 0c-16.82,0 -30.6,-13.78 -30.6,-30.6l0 -50.1zm30.6 85.05l50.1 0c19.22,0 34.95,-15.73 34.95,-34.95l0 -50.1c0,-19.22 -15.73,-34.95 -34.95,-34.95l-50.1 0c-19.22,0 -34.95,15.73 -34.95,34.95l0 50.1c0,19.22 15.73,34.95 34.95,34.95z" id="NXReportFailure4"/></g><g id="NXReportFailure5" data-animator-group="true" data-animator-type="2"><path d="M82.4 37.6c-0.9,-0.9 -2.37,-0.9 -3.27,0l-19.13 19.13 -19.14 -19.13c-0.9,-0.9 -2.36,-0.9 -3.26,0 -0.9,0.9 -0.9,2.35 0,3.26l19.13 19.14 -19.13 19.13c-0.9,0.9 -0.9,2.37 0,3.27 0.45,0.45 1.04,0.68 1.63,0.68 0.59,0 1.18,-0.23 1.63,-0.68l19.14 -19.14 19.13 19.14c0.45,0.45 1.05,0.68 1.64,0.68 0.58,0 1.18,-0.23 1.63,-0.68 0.9,-0.9 0.9,-2.37 0,-3.27l-19.14 -19.13 19.14 -19.14c0.9,-0.91 0.9,-2.36 0,-3.26z" id="NXReportFailure6"/></g></g></g></svg>'))
                    : "Warning" === o
                    ? ((c = d.svgSize),
                      (f =
                          '<svg id="NXReportWarning" fill="' +
                          (i.svgColor || "#eebf31") +
                          '" width="' +
                          (c = c || "110px") +
                          '" height="' +
                          c +
                          '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@-webkit-keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportWarning *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportWarning3{fill: inherit;-webkit-animation-name: NXReportWarning3-animation;animation-name: NXReportWarning3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning5{fill: inherit;-webkit-animation-name: NXReportWarning5-animation;animation-name: NXReportWarning5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning4{-webkit-animation-name: NXReportWarning4-animation;animation-name: NXReportWarning4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}#NXReportWarning2{-webkit-animation-name: NXReportWarning2-animation;animation-name: NXReportWarning2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportWarning1"><g id="NXReportWarning2" data-animator-group="true" data-animator-type="2"><path d="M115.46 106.15l-54.04 -93.8c-0.61,-1.06 -2.23,-1.06 -2.84,0l-54.04 93.8c-0.62,1.07 0.21,2.29 1.42,2.29l108.08 0c1.21,0 2.04,-1.22 1.42,-2.29zm-50.29 -95.95l54.04 93.8c2.28,3.96 -0.65,8.78 -5.17,8.78l-108.08 0c-4.52,0 -7.45,-4.82 -5.17,-8.78l54.04 -93.8c2.28,-3.95 8.03,-4 10.34,0z" id="NXReportWarning3"/></g><g id="NXReportWarning4" data-animator-group="true" data-animator-type="2"><path d="M57.83 94.01c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -3.2c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 3.2zm0 -14.15c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -40.65c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 40.65z" id="NXReportWarning5"/></g></g></svg>'))
                    : "Info" === o &&
                      ((l = d.svgSize),
                      (f =
                          '<svg id="NXReportInfo" fill="' +
                          (i.svgColor || "#26c0d3") +
                          '" width="' +
                          (l = l || "110px") +
                          '" height="' +
                          l +
                          '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportInfo *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportInfo3{fill:inherit;-webkit-animation-name: NXReportInfo3-animation;animation-name: NXReportInfo3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo5{fill:inherit;-webkit-animation-name: NXReportInfo5-animation;animation-name: NXReportInfo5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo2{-webkit-animation-name: NXReportInfo2-animation;animation-name: NXReportInfo2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportInfo4{-webkit-animation-name: NXReportInfo4-animation;animation-name: NXReportInfo4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportInfo1"><g id="NXReportInfo2" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportInfo3"/></g><g id="NXReportInfo4" data-animator-group="true" data-animator-type="2"><path d="M57.75 43.85c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 48.18c0,1.24 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1.01 -2.25,-2.25l0 -48.18zm0 -15.88c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 3.32c0,1.25 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1 -2.25,-2.25l0 -3.32z" id="NXReportInfo5"/></g></g></svg>')),
                (r.innerHTML =
                    s +
                    '<div class="' +
                    d.className +
                    "-content" +
                    (d.cssAnimation ? " with-animation " : "") +
                    " nx-" +
                    d.cssAnimationStyle +
                    '" style="background:' +
                    d.backgroundColor +
                    "; animation-duration:" +
                    d.cssAnimationDuration +
                    'ms;"><div style="width:' +
                    d.svgSize +
                    "; height:" +
                    d.svgSize +
                    ';" class="' +
                    d.className +
                    '-icon">' +
                    f +
                    '</div><h5 class="' +
                    d.className +
                    '-title" style="font-weight:500; font-size:' +
                    d.titleFontSize +
                    "; color:" +
                    i.titleColor +
                    ';">' +
                    t +
                    '</h5><p class="' +
                    d.className +
                    '-message" style="font-size:' +
                    d.messageFontSize +
                    "; color:" +
                    i.messageColor +
                    ';">' +
                    e +
                    '</p><a id="NXReportButton" class="' +
                    d.className +
                    '-button" style="font-weight:500; font-size:' +
                    d.buttonFontSize +
                    "; background:" +
                    i.buttonBackground +
                    "; color:" +
                    i.buttonColor +
                    ';">' +
                    a +
                    "</a></div>"),
                !F.document.getElementById(r.id))
            ) {
                F.document.body.appendChild(r);
                var x = Math.round(F.innerHeight),
                    u = Math.round(F.document.getElementById(r.id).offsetHeight);
                r.style.top = (x - u) / 2 + "px";
                var g = F.document.getElementById(r.id);
                F.document.getElementById("NXReportButton").addEventListener("click", function () {
                    n && "function" == typeof n && n(), g.classList.add("remove");
                    var t = setTimeout(function () {
                        null !== g.parentNode && g.parentNode.removeChild(g), clearTimeout(t);
                    }, d.cssAnimationDuration);
                });
            }
        }
        function a(t, e, a, n) {
            if ((b || j.Loading.Init({}), (t = t || ""), a)) {
                t = t.toString().length > b.messageMaxLength ? A(t).toString().substring(0, b.messageMaxLength) + "..." : A(t).toString();
                var i = parseInt(b.svgSize),
                    o = "";
                if (0 < t.length) {
                    var r = Math.round(i - i / 4).toString() + "px",
                        s = (1.4 * parseInt(b.messageFontSize)).toString() + "px";
                    o = '<p id="' + b.messageID + '" class="loading-message" style="color:' + b.messageColor + ";font-size:" + b.messageFontSize + ";height:" + s + "; top:" + r + ';">' + t + "</p>";
                }
                b.cssAnimation || (b.cssAnimationDuration = 0);
                var l = "";
                if ("standard" === e) l = E(b.svgSize, b.svgColor);
                else if ("hourglass" === e) l = D(b.svgSize, b.svgColor);
                else if ("circle" === e) l = W(b.svgSize, b.svgColor);
                else if ("arrows" === e) l = O(b.svgSize, b.svgColor);
                else if ("dots" === e) l = H(b.svgSize, b.svgColor);
                else if ("pulse" === e) l = P(b.svgSize, b.svgColor);
                else if ("custom" === e && null !== b.customSvgUrl) l = '<img class="custom-loading-icon" width="' + b.svgSize + '" height="' + b.svgSize + '" src="' + b.customSvgUrl + '" alt="Notiflix">';
                else {
                    if ("custom" === e && null == b.customSvgUrl) return T("Notiflix Error", 'You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), !1;
                    "notiflix" === e &&
                        (l =
                            '<svg id="NXLoadingNotiflixLib" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' +
                            (u = (u = b.svgSize) || "60px") +
                            '" height="' +
                            u +
                            '" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.line{stroke:' +
                            ("#f8f8f8" || "#f8f8f8") +
                            ";stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.line{fill:none;}.dot{fill:" +
                            (g = (g = "#32c682") || "#32c682") +
                            ";stroke:" +
                            g +
                            ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.n{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-n;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:0s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-n{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.x2,.x1{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-x;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:.2s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-x{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.dot{animation-name: notiflix-dot;animation-timing-function: ease-in-out;animation-duration: 1.25s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-dot{0%{stroke-width: 0;}50%{stroke-width: 12;}100%{stroke-width: 0;}}</style></defs><g><path class="dot" d="M47.97 135.05c3.59,0 6.5,2.91 6.5,6.5 0,3.59 -2.91,6.5 -6.5,6.5 -3.59,0 -6.5,-2.91 -6.5,-6.5 0,-3.59 2.91,-6.5 6.5,-6.5z"/><path class="line n" d="M10.14 144.76l0 -0.22 0 -0.96 0 -56.03c0,-5.68 -4.54,-41.36 37.83,-41.36 42.36,0 37.82,35.68 37.82,41.36l0 57.21"/><path class="line x1" d="M115.06 144.49c24.98,-32.68 49.96,-65.35 74.94,-98.03"/><path class="line x2" d="M114.89 46.6c25.09,32.58 50.19,65.17 75.29,97.75"/></g></svg>');
                }
                var c = 0;
                0 < t.length && (c = "-" + Math.round(i - i / 4).toString() + "px");
                var m = '<div style="top:' + c + "; width:" + b.svgSize + "; height:" + b.svgSize + ';" class="' + b.className + "-icon" + (0 < t.length ? " with-message" : "") + '">' + l + "</div>",
                    p = F.document.createElement("div");
                if (
                    ((p.id = h.ID),
                    (p.className = b.className + (b.cssAnimation ? " with-animation" : "") + (b.clickToClose ? " click-to-close" : "")),
                    (p.style.zIndex = b.zindex),
                    (p.style.background = b.backgroundColor),
                    (p.style.animationDuration = b.cssAnimationDuration + "ms"),
                    (p.style.fontFamily = '"' + b.fontFamily + '", sans-serif'),
                    b.rtl && (p.setAttribute("dir", "rtl"), p.classList.add("rtl-on")),
                    (p.innerHTML = m + o),
                    !F.document.getElementById(p.id))
                )
                    if ((F.document.body.appendChild(p), b.clickToClose))
                        F.document.getElementById(p.id).addEventListener("click", function () {
                            p.classList.add("remove");
                            var t = setTimeout(function () {
                                null !== p.parentNode && (p.parentNode.removeChild(p), clearTimeout(t));
                            }, b.cssAnimationDuration);
                        });
            } else if (F.document.getElementById(h.ID))
                var f = F.document.getElementById(h.ID),
                    x = setTimeout(function () {
                        f.classList.add("remove");
                        var t = setTimeout(function () {
                            null !== f.parentNode && (f.parentNode.removeChild(f), clearTimeout(t));
                        }, b.cssAnimationDuration);
                        clearTimeout(x);
                    }, n);
            var u, g;
        }
        function i(t, o, e, a, n) {
            if ("string" != typeof o) return T("Notiflix Error", "The selector must be a String."), !1;
            "number" != typeof n && (n = 0);
            var i = F.document.querySelectorAll(o);
            if (!(0 < i.length)) return T("Notiflix Error", 'You called the "Notiflix.Block..." function with "' + o + '" selector, but there is no such element(s) on the document.'), !1;
            Q || j.Block.Init({}), (!a || (a && "string" != typeof a)) && (a = void 0), Q.cssAnimation || (Q.cssAnimationDuration = 0);
            var r = "notiflix-block";
            Q.className && "string" == typeof Q.className && (r = Q.className.trim());
            var s = "number" == typeof Q.querySelectorLimit ? Q.querySelectorLimit : 200,
                l = i.length >= s ? s : i.length;
            if (t)
                for (var c = 0; c < l; c++) {
                    var m = i[c],
                        p = m.querySelectorAll("[id^=" + Y.ID + "]");
                    if (p.length < 1) {
                        var f = "";
                        e && (f = ("hourglass" === e ? D : "circle" === e ? W : "arrows" === e ? O : "dots" === e ? H : "pulse" === e ? P : E)(Q.svgSize, Q.svgColor));
                        var x = parseInt(Q.svgSize),
                            u = Math.round(x - x / 5).toString() + "px",
                            g = a && 0 < a.length ? "-" + u : 0,
                            d = '<span class="' + r + '-icon" style="width:' + Q.svgSize + ";height:" + Q.svgSize + ";top:" + g + ';">' + f + "</span>",
                            b = "",
                            y = 0;
                        a &&
                            ((a = a.length > Q.messageMaxLength ? A(a).toString().substring(0, Q.messageMaxLength) + "..." : A(a).toString()),
                            (b =
                                '<span style="top:' +
                                u +
                                ";height:" +
                                (y = Math.round(1.4 * parseInt(Q.messageFontSize)).toString() + "px") +
                                ";font-family:" +
                                Q.fontFamily +
                                ", sans-serif;font-size:" +
                                Q.messageFontSize +
                                ";color:" +
                                Q.messageColor +
                                ';" class="' +
                                r +
                                '-message">' +
                                a +
                                "</span>")),
                            G++;
                        var h = F.document.createElement("div");
                        (h.id = Y.ID + "-" + G),
                            (h.className = r + "-wrap" + (Q.cssAnimation ? " with-animation" : "")),
                            (h.style.position = Q.position),
                            (h.style.zIndex = Q.zindex),
                            (h.style.background = Q.backgroundColor),
                            (h.style.animationDuration = Q.cssAnimationDuration + "ms"),
                            (h.style.fontFamily = '"' + Q.fontFamily + '", sans-serif'),
                            Q.rtl && (h.setAttribute("dir", "rtl"), h.classList.add("rtl-on")),
                            (h.innerHTML = d + b);
                        var w = F.getComputedStyle(m).getPropertyValue("position");
                        w = w && "string" == typeof w ? w.toLowerCase() : "relative";
                        var k = F.getComputedStyle(m).getPropertyValue("min-height").match(/\d/g),
                            v = Math.round(k.join("")),
                            N = Math.round(1.5 * (parseInt(y) + x)),
                            z = "";
                        v < N && (z = "min-height:" + N + "px");
                        var I = "";
                        m.getAttribute("id") ? (I = "#" + m.getAttribute("id")) : m.classList[0] && (I = "." + m.classList[0]);
                        if (["absolute", "relative", "fixed", "sticky"].indexOf(w) <= -1) {
                            var C = '<style id="Style-' + Y.ID + "-" + G + '">' + I + "." + r + "-position{position:relative!important;pointer-events:none;" + z + ";}</style>",
                                S = F.document.createRange();
                            S.selectNode(F.document.head);
                            var X = S.createContextualFragment(C);
                            F.document.head.appendChild(X), m.classList.add(r + "-position");
                        }
                        m.appendChild(h);
                    }
                }
            else {
                function R(a) {
                    var n = setTimeout(function () {
                        a.remove();
                        var t = a.getAttribute("id"),
                            e = F.document.getElementById("Style-" + t);
                        e && e.remove(), clearTimeout(n);
                    }, Q.cssAnimationDuration);
                }
                function M(t) {
                    if (t && 0 < t.length)
                        for (var e = 0; e < t.length; e++) {
                            var a = t[e];
                            a && (a.classList.add("remove"), R(a));
                        }
                    else
                        (n = "Notiflix Info"),
                            (i = '"Notiflix.Block.Remove();" function called with "' + o + '" selector, but this selector does not have a "Notiflix.Block..." element to remove.'),
                            console.log("%c " + n + " ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + i + "\nVisit documentation page to learn more: https://www.notiflix.com/documentation");
                    var n, i;
                }
                function L(e) {
                    var a = setTimeout(function () {
                        var t = r + "-position";
                        e.classList.remove(t), clearTimeout(a);
                    }, Q.cssAnimationDuration + 300);
                }
                var B = setTimeout(function () {
                    for (var t = 0; t < l; t++) {
                        var e = i[t];
                        L(e), (p = e.querySelectorAll("[id^=" + Y.ID + "]")), M(p);
                    }
                    clearTimeout(B);
                }, n);
            }
        }
        var I,
            d,
            f,
            b,
            Q,
            C = {
                wrapID: "NotiflixNotifyWrap",
                width: "280px",
                position: "right-top",
                distance: "10px",
                opacity: 1,
                borderRadius: "5px",
                rtl: !1,
                timeout: 3e3,
                messageMaxLength: 110,
                backOverlay: !1,
                backOverlayColor: "rgba(0,0,0,0.5)",
                plainText: !0,
                showOnlyTheLastOne: !1,
                clickToClose: !1,
                ID: "NotiflixNotify",
                className: "notiflix-notify",
                zindex: 4001,
                useGoogleFont: !0,
                fontFamily: "Quicksand",
                fontSize: "13px",
                cssAnimation: !0,
                cssAnimationDuration: 400,
                cssAnimationStyle: "fade",
                closeButton: !1,
                useIcon: !0,
                useFontAwesome: !1,
                fontAwesomeIconStyle: "basic",
                fontAwesomeIconSize: "34px",
                success: { background: "#32c682", textColor: "#fff", childClassName: "success", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-check-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)" },
                failure: { background: "#ff5549", textColor: "#fff", childClassName: "failure", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-times-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)" },
                warning: { background: "#eebf31", textColor: "#fff", childClassName: "warning", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-exclamation-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)" },
                info: { background: "#26c0d3", textColor: "#fff", childClassName: "info", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-info-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)" },
            },
            y = {
                ID: "NotiflixReportWrap",
                className: "notiflix-report",
                width: "320px",
                backgroundColor: "#f8f8f8",
                borderRadius: "25px",
                rtl: !1,
                zindex: 4002,
                backOverlay: !0,
                backOverlayColor: "rgba(0, 0, 0, 0.5)",
                useGoogleFont: !0,
                fontFamily: "Quicksand",
                svgSize: "110px",
                plainText: !0,
                titleFontSize: "16px",
                titleMaxLength: 34,
                messageFontSize: "13px",
                messageMaxLength: 400,
                buttonFontSize: "14px",
                buttonMaxLength: 34,
                cssAnimation: !0,
                cssAnimationDuration: 360,
                cssAnimationStyle: "fade",
                success: { svgColor: "#32c682", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#32c682", buttonColor: "#fff" },
                failure: { svgColor: "#ff5549", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#ff5549", buttonColor: "#fff" },
                warning: { svgColor: "#eebf31", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#eebf31", buttonColor: "#fff" },
                info: { svgColor: "#26c0d3", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#26c0d3", buttonColor: "#fff" },
            },
            x = {
                ID: "NotiflixConfirmWrap",
                className: "notiflix-confirm",
                width: "300px",
                zindex: 4003,
                position: "center",
                distance: "10px",
                backgroundColor: "#f8f8f8",
                borderRadius: "25px",
                backOverlay: !0,
                backOverlayColor: "rgba(0,0,0,0.5)",
                rtl: !1,
                useGoogleFont: !0,
                fontFamily: "Quicksand",
                cssAnimation: !0,
                cssAnimationStyle: "fade",
                cssAnimationDuration: 300,
                plainText: !0,
                titleColor: "#32c682",
                titleFontSize: "16px",
                titleMaxLength: 34,
                messageColor: "#1e1e1e",
                messageFontSize: "14px",
                messageMaxLength: 110,
                buttonsFontSize: "15px",
                buttonsMaxLength: 34,
                okButtonColor: "#f8f8f8",
                okButtonBackground: "#32c682",
                cancelButtonColor: "#f8f8f8",
                cancelButtonBackground: "#a9a9a9",
            },
            h = {
                ID: "NotiflixLoadingWrap",
                className: "notiflix-loading",
                zindex: 4e3,
                backgroundColor: "rgba(0,0,0,0.8)",
                rtl: !1,
                useGoogleFont: !0,
                fontFamily: "Quicksand",
                cssAnimation: !0,
                cssAnimationDuration: 400,
                clickToClose: !1,
                customSvgUrl: null,
                svgSize: "80px",
                svgColor: "#32c682",
                messageID: "NotiflixLoadingMessage",
                messageFontSize: "15px",
                messageMaxLength: 34,
                messageColor: "#dcdcdc",
            },
            Y = {
                ID: "NotiflixBlockWrap",
                querySelectorLimit: 200,
                className: "notiflix-block",
                position: "absolute",
                zindex: 1e3,
                backgroundColor: "rgba(255,255,255,0.9)",
                rtl: !1,
                useGoogleFont: !0,
                fontFamily: "Quicksand",
                cssAnimation: !0,
                cssAnimationDuration: 300,
                svgSize: "45px",
                svgColor: "#383838",
                messageFontSize: "14px",
                messageMaxLength: 34,
                messageColor: "#383838",
            },
            r = function () {
                var a = {},
                    n = !1,
                    t = 0;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && ((n = arguments[0]), t++);
                function e(t) {
                    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n && "[object Object]" === Object.prototype.toString.call(t[e]) ? (a[e] = r(a[e], t[e])) : (a[e] = t[e]));
                }
                for (; t < arguments.length; t++) e(arguments[t]);
                return a;
            },
            S = 0,
            G = 0,
            j = {
                Notify: {
                    Init: function (t) {
                        (I = r(!0, C, t)), e(I.useGoogleFont, I.fontFamily);
                    },
                    Merge: function (t) {
                        if (!I) return T("Notiflix Error", "You have to initialize the Notify module before call Merge function."), !1;
                        I = r(!0, I, t);
                    },
                    Success: function (t, e) {
                        I || j.Notify.Init({});
                        var a = I.success;
                        n(t, e, a, "Success");
                    },
                    Failure: function (t, e) {
                        I || j.Notify.Init({});
                        var a = I.failure;
                        n(t, e, a, "Failure");
                    },
                    Warning: function (t, e) {
                        I || j.Notify.Init({});
                        var a = I.warning;
                        n(t, e, a, "Warning");
                    },
                    Info: function (t, e) {
                        I || j.Notify.Init({});
                        var a = I.info;
                        n(t, e, a, "Info");
                    },
                },
                Report: {
                    Init: function (t) {
                        (d = r(!0, y, t)), e(d.useGoogleFont, d.fontFamily);
                    },
                    Merge: function (t) {
                        if (!d) return T("Notiflix Error", "You have to initialize the Report module before call Merge function."), !1;
                        d = r(!0, d, t);
                    },
                    Success: function (t, e, a, n) {
                        d || j.Report.Init({});
                        var i = d.success;
                        o(t, e, a, n, i, "Success");
                    },
                    Failure: function (t, e, a, n) {
                        d || j.Report.Init({});
                        var i = d.failure;
                        o(t, e, a, n, i, "Failure");
                    },
                    Warning: function (t, e, a, n) {
                        d || j.Report.Init({});
                        var i = d.warning;
                        o(t, e, a, n, i, "Warning");
                    },
                    Info: function (t, e, a, n) {
                        d || j.Report.Init({});
                        var i = d.info;
                        o(t, e, a, n, i, "Info");
                    },
                },
                Confirm: {
                    Init: function (t) {
                        (f = r(!0, x, t)), e(f.useGoogleFont, f.fontFamily);
                    },
                    Merge: function (t) {
                        if (!f) return T("Notiflix Error", "You have to initialize the Confirm module before call Merge function."), !1;
                        f = r(!0, f, t);
                    },
                    Show: function (t, e, a, n, i, o) {
                        !(function (t, e, a, n, i, o) {
                            f || j.Confirm.Init({}),
                                f.plainText && ((t = A(t)), (e = A(e)), (a = A(a)), (n = A(n))),
                                f.plainText ||
                                    (t.length > f.titleMaxLength && ((t = "HTML Tags Error"), (e = 'Your Title content length is more than "titleMaxLength" option.'), (a = "Okay"), (n = "...")),
                                    e.length > f.messageMaxLength && ((t = "HTML Tags Error"), (e = 'Your Message content length is more than "messageMaxLength" option.'), (a = "Okay"), (n = "...")),
                                    (a.length || n.length) > f.buttonsMaxLength && ((t = "HTML Tags Error"), (e = 'Your Buttons contents length is more than "buttonsMaxLength" option.'), (a = "Okay"), (n = "..."))),
                                t.length > f.titleMaxLength && (t = t.substring(0, f.titleMaxLength) + "..."),
                                e.length > f.messageMaxLength && (e = e.substring(0, f.messageMaxLength) + "..."),
                                a.length > f.buttonsMaxLength && (a = a.substring(0, f.buttonsMaxLength) + "..."),
                                n.length > f.buttonsMaxLength && (n = n.substring(0, f.buttonsMaxLength) + "..."),
                                f.cssAnimation || (f.cssAnimationDuration = 0);
                            var r = F.document.createElement("div");
                            (r.id = x.ID),
                                (r.className = f.className + (f.cssAnimation ? " with-animation nx-" + f.cssAnimationStyle : "")),
                                (r.style.width = f.width),
                                (r.style.zIndex = f.zindex),
                                f.rtl && (r.setAttribute("dir", "rtl"), r.classList.add("rtl-on")),
                                (r.style.fontFamily = '"' + f.fontFamily + '", sans-serif');
                            var s = "";
                            f.backOverlay &&
                                (s = '<div class="' + f.className + "-overlay" + (f.cssAnimation ? " with-animation" : "") + '" style="background:' + f.backOverlayColor + ";animation-duration:" + f.cssAnimationDuration + 'ms;"></div>');
                            var l = "";
                            if (
                                (i &&
                                    (l =
                                        '<a id="NXConfirmButtonCancel" class="confirm-button-cancel" style="color:' + f.cancelButtonColor + ";background:" + f.cancelButtonBackground + ";font-size:" + f.buttonsFontSize + ';">' + n + "</a>"),
                                (r.innerHTML =
                                    s +
                                    '<div class="' +
                                    f.className +
                                    '-content" style="background:' +
                                    f.backgroundColor +
                                    "; animation-duration:" +
                                    f.cssAnimationDuration +
                                    "ms; border-radius: " +
                                    f.borderRadius +
                                    ';"><div class="' +
                                    f.className +
                                    '-head"><h5 style="color:' +
                                    f.titleColor +
                                    ";font-size:" +
                                    f.titleFontSize +
                                    ';">' +
                                    t +
                                    '</h5><p style="color:' +
                                    f.messageColor +
                                    ";font-size:" +
                                    f.messageFontSize +
                                    ';">' +
                                    e +
                                    '</p></div><div class="' +
                                    f.className +
                                    '-buttons"><a id="NXConfirmButtonOk" class="confirm-button-ok' +
                                    (i ? "" : " full") +
                                    '" style="color:' +
                                    f.okButtonColor +
                                    ";background:" +
                                    f.okButtonBackground +
                                    ";font-size:" +
                                    f.buttonsFontSize +
                                    ';">' +
                                    a +
                                    "</a>" +
                                    l +
                                    "</div></div>"),
                                !F.document.getElementById(r.id))
                            ) {
                                if ((F.document.body.appendChild(r), "center" === f.position)) {
                                    var c = Math.round(F.innerHeight),
                                        m = Math.round(F.document.getElementById(r.id).offsetHeight);
                                    (r.style.top = (c - m) / 2 + "px"), (r.style.left = f.distance), (r.style.right = f.distance), (r.style.bottom = "auto"), (r.style.margin = "auto");
                                } else
                                    "right-top" === f.position
                                        ? ((r.style.right = f.distance), (r.style.top = f.distance), (r.style.bottom = "auto"), (r.style.left = "auto"))
                                        : "right-bottom" === f.position
                                        ? ((r.style.right = f.distance), (r.style.bottom = f.distance), (r.style.top = "auto"), (r.style.left = "auto"))
                                        : "left-top" === f.position
                                        ? ((r.style.left = f.distance), (r.style.top = f.distance), (r.style.right = "auto"), (r.style.bottom = "auto"))
                                        : "left-bottom" === f.position
                                        ? ((r.style.left = f.distance), (r.style.bottom = f.distance), (r.style.top = "auto"), (r.style.right = "auto"))
                                        : ((r.style.top = f.distance), (r.style.left = 0), (r.style.right = 0), (r.style.bottom = "auto")),
                                        (r.style.margin = "auto");
                                var p = F.document.getElementById(r.id);
                                if (
                                    (F.document.getElementById("NXConfirmButtonOk").addEventListener("click", function () {
                                        i && "function" == typeof i && i(), p.classList.add("remove");
                                        var t = setTimeout(function () {
                                            null !== p.parentNode && (p.parentNode.removeChild(p), clearTimeout(t));
                                        }, f.cssAnimationDuration);
                                    }),
                                    i && "function" == typeof i)
                                )
                                    F.document.getElementById("NXConfirmButtonCancel").addEventListener("click", function () {
                                        o && "function" == typeof o && o(), p.classList.add("remove");
                                        var t = setTimeout(function () {
                                            null !== p.parentNode && (p.parentNode.removeChild(p), clearTimeout(t));
                                        }, f.cssAnimationDuration);
                                    });
                            }
                        })((t = t || "Notiflix Confirm"), (e = e || "Do you agree with me?"), (a = a || "Yes"), (n = n || "No"), (i = i || void 0), (o = o || void 0));
                    },
                },
                Loading: {
                    Init: function (t) {
                        (b = r(!0, h, t)), e(b.useGoogleFont, b.fontFamily);
                    },
                    Merge: function (t) {
                        if (!b) return T("Notiflix Error", "You have to initialize the Loading module before call Merge function."), !1;
                        b = r(!0, b, t);
                    },
                    Standard: function (t) {
                        a(t, "standard", !0, 0);
                    },
                    Hourglass: function (t) {
                        a(t, "hourglass", !0, 0);
                    },
                    Circle: function (t) {
                        a(t, "circle", !0, 0);
                    },
                    Arrows: function (t) {
                        a(t, "arrows", !0, 0);
                    },
                    Dots: function (t) {
                        a(t, "dots", !0, 0);
                    },
                    Pulse: function (t) {
                        a(t, "pulse", !0, 0);
                    },
                    Custom: function (t) {
                        a(t, "custom", !0, 0);
                    },
                    Notiflix: function (t) {
                        a(t, "notiflix", !0, 0);
                    },
                    Remove: function (t) {
                        a(!1, !1, !1, (t = t || 0));
                    },
                    Change: function (t) {
                        !(function (t) {
                            if (((t = t || ""), F.document.getElementById(h.ID)))
                                if (0 < t.length) {
                                    t = t.length > b.messageMaxLength ? A(t).toString().substring(0, b.messageMaxLength) + "..." : A(t).toString();
                                    var e = F.document.getElementById(h.ID).getElementsByTagName("p")[0];
                                    if (e) e.innerHTML = t;
                                    else {
                                        var a = F.document.createElement("p");
                                        (a.id = b.messageID), (a.className = "loading-message new"), (a.style.color = b.messageColor), (a.style.fontSize = b.messageFontSize);
                                        var n = parseInt(b.svgSize),
                                            i = Math.round(n - n / 4).toString() + "px";
                                        a.style.top = i;
                                        var o = (1.4 * parseInt(b.messageFontSize)).toString() + "px";
                                        (a.style.height = o), (a.innerHTML = t), F.document.getElementById(h.ID).appendChild(a);
                                        var r = F.document.getElementById(h.ID).getElementsByTagName("div")[0],
                                            s = "-" + Math.round(n - n / 4).toString() + "px";
                                        r.style.top = s;
                                    }
                                } else T("Notiflix Error", "Where is the new message?");
                        })(t);
                    },
                },
                Block: {
                    Init: function (t) {
                        (Q = r(!0, Y, t)), e(Q.useGoogleFont, Q.fontFamily);
                    },
                    Merge: function (t) {
                        if (!Q) return T("Notiflix Error", 'You have to initialize the "Notiflix.Block" module before call Merge function.'), !1;
                        Q = r(!0, Q, t);
                    },
                    Standard: function (t, e) {
                        i(!0, t, "standard", e);
                    },
                    Hourglass: function (t, e) {
                        i(!0, t, "hourglass", e);
                    },
                    Circle: function (t, e) {
                        i(!0, t, "circle", e);
                    },
                    Arrows: function (t, e) {
                        i(!0, t, "arrows", e);
                    },
                    Dots: function (t, e) {
                        i(!0, t, "dots", e);
                    },
                    Pulse: function (t, e) {
                        i(!0, t, "pulse", e);
                    },
                    Remove: function (t, e) {
                        i(!1, t, null, null, e);
                    },
                },
            };
        return { Notify: j.Notify, Report: j.Report, Confirm: j.Confirm, Loading: j.Loading, Block: j.Block };
    }
});

 function validateForm() {
  setTimeout( function () {
        let x = document.forms["donate-form"]["the_email"].value;
        if (x == "") {
            var element = document.createElement("div");
            element.style.backgroundColor = "#ff5549";
            element.className = "email-validation";
            element.innerHTML = '\
        <div id="NotiflixNotify-10" class="notiflix-notify failure with-animation with-icon nx-fade   "\
        style="font-size: 13px; color: rgb(255, 255, 255); background: rgb(255, 85, 73); border-radius: 5px; font-family: &quot;Quicksand&quot;, sans-serif; animation-duration: 400ms;">\
        <svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px"\
            version="1.1"\
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\
            viewBox="0 0 40 40" xmlns:xlink="http://www.w3.org/1999/xlink">\
            <defs>\
                <style type="text/css">\
                    #Notiflix-Icon-Failure {\
                        fill: rgba(0, 0, 0, 0.2)\
                    }\
                </style>\
            </defs>\
            <g>\
                <path id="Notiflix-Icon-Failure" class="fil0"\
                    d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z">\
                </path>\
            </g>\
        </svg><span class="the-message with-icon" style="padding-top: 11px; padding-bottom: 11px;">???????? ???????????? ???????????????????? ??????????</span></div>'
                document.getElementById('NotiflixNotifyWrap').prepend(element)
       
        setTimeout(() => {
            document.getElementById('NotiflixNotify-10').parentElement.style.opacity = '0'
            setTimeout(() => {
                document.getElementById('NotiflixNotifyWrap').remove()
            }, 500);
        }, 3000);
        }
  }, 100 );

} 

