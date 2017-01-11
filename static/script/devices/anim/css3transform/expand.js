define(
    'antie/devices/anim/css3transform/expand',
    [
        'antie/devices/anim/shared/helpers'
    ],
    function (Helpers) {
        'use strict';

        return function (options) {
            var onTransitionEnd;
            var el = options.el;

            function start () {
                function setDimensions () {
                    if (options.to.width) {
                        Helpers.setStyle(el, 'width', options.to.width + 'px');
                    }
                    if (options.to.height) {
                        Helpers.setStyle(el, 'height', options.to.height + 'px');
                    }
                }

                function onComplete () {
                    el.classList.remove('animate');
                    if (options.onComplete) {
                        options.onComplete();
                    }
                }

                if (Helpers.skipAnim(options)) {
                    setDimensions();
                    onComplete();
                    return;
                }

                // Avoid the 'animate' class being overwritten by TAL if any widget-class methods are called after animating. Sigh...
                setTimeout(function () {
                    el.classList.add('animate');
                    setDimensions();
                    onTransitionEnd = Helpers.registerTransitionEndEvent(el, onComplete);
                }, 0);
            }

            function stop () {
                onTransitionEnd();
            }

            return {
                start: start,
                stop: stop
            };
        };
    }
);
