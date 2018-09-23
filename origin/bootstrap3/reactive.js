/**
 * Created by Angela on 2018/4/26.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            // set body fontsize
            if (docEl.clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else if (docEl.clientWidth <= 300) {
                docEl.style.fontSize = '40px';
            } else {
                docEl.style.fontSize = (document.documentElement.clientWidth / 7.5) + 'px';
            }
            console.log(docEl.style.fontSize);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);