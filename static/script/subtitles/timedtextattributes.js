define(
    'antie/subtitles/timedtextattributes',
    [
        'antie/class',
        'antie/subtitles/timestamp'
    ],
    function(Class, Timestamp) {
        'use strict';

        var descriptors = {
            backgroundColor: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'body', 'div', 'p', 'region', 'span' ]
            },
            cellResolution: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            clockMode: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            color: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            direction: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'p', 'span' ]
            },
            display: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'body', 'div', 'p', 'region', 'span' ]
            },
            displayAlign: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            dropMode: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            extent: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'tt', 'region' ]
            },
            fontFamily: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            fontSize: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            fontStyle: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            fontWeight: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            frameRate: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            frameRateMultiplier: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            id: {
                inheritable: false,
                style:       false,
                appliesTo:   [
                    'tt',
                    'body', 'div', 'p', 'span', 'br',
                    'head', 'layout', 'region', 'styling', 'style',
                    'metadata', 'actor', 'agent', 'copyright', 'desc', 'name', 'title',
                    /* parameters */ 'profile', 'features', 'feature', 'extensions', 'extension'
                ]
            },
            lang: {
                inheritable: false,
                style:       false,
                appliesTo:   [
                    'tt',
                    'body', 'div', 'p', 'span', 'br',
                    'head', 'layout', 'region', 'styling', 'style',
                    'metadata', 'actor', 'agent', 'copyright', 'desc', 'name', 'title'
                ]
            },
            lineHeight: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'p' ]
            },
            markerMode: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            opacity: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            origin: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            overflow: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            padding: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            pixelAspectRatio: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            profile: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            region: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'body', 'div', 'p', 'span' ]
            },
            showBackground: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            space: {
                inheritable: false,
                style:       false,
                appliesTo:   [
                    'tt',
                    'body', 'div', 'p', 'span', 'br',
                    'head', 'layout', 'region', 'styling', 'style',
                    'metadata', 'actor', 'agent', 'copyright', 'desc', 'name', 'title'
                ]
            },
            style: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'body', 'div', 'p' , 'region', 'span', 'style' ]
            },
            subFrameRate: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            textAlign: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'p' ]
            },
            textDecoration: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            textOutline: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            tickRate: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            timeBase: {
                inheritable: false,
                style:       false,
                appliesTo:   [ 'tt' ]
            },
            unicodeBidi: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'p', 'span' ]
            },
            visibility: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'body', 'div', 'p', 'region', 'span' ]
            },
            wrapOption: {
                inheritable: true,
                style:       true,
                appliesTo:   [ 'span' ]
            },
            writingMode: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            },
            zIndex: {
                inheritable: false,
                style:       true,
                appliesTo:   [ 'region' ]
            }
        };

        /**
         * Attribute values.
         *
         * @class
         * @name antie.subtitles.TimedTextAttributes
         * @extends antie.Class
         */
        var TimedTextAttributes = Class.extend(/** @lends antie.subtitles.TimedTextAttributes.prototype */{
            init: function() {
                this._attributeMap = {};
            },

            /**
             * Sets the value of an attribute.
             *
             * @param {String} name
             *        The name of the attribute
             *
             * @param {any} value
             *        The new value of the attribute
             * @public
             */
            setAttribute: function(name, value) {
                // if (typeof name !== 'string' || !TimedTextAttributes.TYPE.hasOwnProperty(name)) {
                //     throw new Error('TimedTextAttributes.setAttribute unknown attribute name:' + name);
                // }
                //
                // if (value) {
                //     if (!this._isMatchingType(value, TimedTextAttributes.TYPE[name])) {
                //         throw new Error('TimedTextAttributes.setAttribute attribute ' + name + '\'s value is the wrong type - ' + typeof value + ': ' + value);
                //     }
                // }

                if (this._attributeMap[name]) {
                    throw new Error('TimedTextAttributes.setAttribute attempting to set attribute ' + name + '\'s value more than once');
                }

                this._attributeMap[name] = value;

            },

            /**
             * Returns the value of an attribute.
             *
             * @param {String} name
             *        The name of the attribute
             *
             * @returns {?any} the value of the named attribute, or null if it has not been set
             * @public
             */
            getAttribute: function(name) {
                var value = this._attributeMap[name];
                if (value !== undefined && value !== null) {
                    return value;
                } else if (this.isStyleAttribute(name) && this._attributeMap.style) {
                    var styleElements = this._attributeMap.style;
                    for (var i = 0; i < styleElements.length; i++) {
                        // Just get the value from the <style> tag's attributes (don't try to climb the inheritance hierarchy again)
                        value = styleElements[i].getAttributes().getAttribute(name);
                        if (value !== undefined && value !== null) {
                            return value;
                        }
                    }
                }

                return null;
            },

            /**
             * Checks if an attribute can be inherited from an element's parent.
             *
             * @param {String} name
             *        The name of the attribute
             *
             * @returns {Boolean} true if the named attribute can be inherited,
             *                    false if not
             * @public
             */
            isInheritable: function(name) {
                if (descriptors.hasOwnProperty(name)) {
                    return descriptors[name].inheritable;
                } else {
                    return false;
                }
            },

            /**
             * Checks if an attribute's value can be obtained from a <style> element if
             * one is referenced.
             *
             * @param {String} name
             *        The name of the attribute
             *
             * @returns {Boolean} true if the named attribute's value can be obtained from a referenced <style> element,
             *                    false if not
             * @public
             */
            isStyleAttribute: function(name) {
                if (descriptors.hasOwnProperty(name)) {
                    return descriptors[name].style;
                } else {
                    return false;
                }
            },

            /**
             * Checks whether an attribute is applicable to a specified element.
             *
             * @param {String} name
             *        The name of the attribute
             *
             * @param {String} elementType
             *        The element type to be checked
             *
             * @returns {Boolean} true if the named attribute is applicable to elementType,
             *                    false if not
             * @public
             */
            isApplicableTo: function(name, elementType) {
                if (descriptors.hasOwnProperty(name)) {
                    var appliesTo = descriptors[name].appliesTo;
                    for (var i = 0; i < appliesTo.length; i++) {
                        if (appliesTo[i] === elementType) {
                            return true;
                        }
                    }

                    // All tts attributes should be returned from a style element
                    if (elementType === 'style' && descriptors[name].style) {
                        return true;
                    }
                }

                return false;
            },

            /**
             * Returns the list of element types the named attribute applies to.
             *
             * @param {String} name
             *        The name of the attribute
             *
             * @returns {String[]} list of element types the named attribute applies to
             * @public
             */
            appliesTo: function(name) {
                if (descriptors.hasOwnProperty(name)) {
                    return descriptors[name].appliesTo;
                } else {
                    return [];
                }
            },

            /**
             * Checks an attribute's value is of the correct type.
             *
             * @param {any} attributeValue
             *        The value of the attribute to be checked
             *
             * @param {antie.subtitles.TimedTextAttributes.TYPE} attributeType
             *        Type definition to check the attribute's value against
             *
             * @returns {Boolean} true if attributeValue matches attributeType,
             *                    false otherwise
             * @private
             */
            _isMatchingType: function(attributeValue, attributeType) {
                if (typeof attributeType === 'object' && attributeType instanceof RegExp) {
                    return attributeType.test(attributeValue);
                } else {
                    return (attributeValue instanceof attributeType);
                }
            },

            /**
             * Returns the start/end time, rounded to the nearest millisecond, of
             * the attributes' element, or null if the element has no begin/end
             * times of its own (inherited times are ignored).
             *
             * @returns {{beginMilliseconds: Number, endMilliseconds: Number}}
             *          the begin/end of the element's display interval
             * @public
             */
            getTimingInterval: function() {
                if (!this.getAttribute('begin') && !this.getAttribute('end')) {
                    return null;
                }

                var beginMilliseconds = this.getAttribute('begin') ? this.getAttribute('begin').getMilliseconds() : 0;

                var endMilliseconds;
                if (this.getAttribute('end')) {
                    endMilliseconds = this.getAttribute('end').getMilliseconds();
                } else if (this.getAttribute('dur')) {
                    endMilliseconds = beginMilliseconds + this.getAttribute('dur').getMilliseconds();
                } else {
                    endMilliseconds = Infinity;
                }

                return {
                    'beginMilliseconds': beginMilliseconds,
                    'endMilliseconds': endMilliseconds
                };
            },

            /**
             * @returns {antie.subtitles.TimedTextAttributes} a shallow copy of this object
             * @public
             */
            clone: function() {
                var result = new TimedTextAttributes();
                for (var name in this._attributeMap) {
                    if (this._attributeMap.hasOwnProperty(name)) {
                        result._attributeMap[name] = this._attributeMap[name];
                    }
                }

                return result;
            }

        });

        /**
         * @name antie.subtitles.TimedTextAttributes.TYPE
         * @enum {(class|String|RegExp)}
         * @readonly
         */
        TimedTextAttributes.TYPE = {
            begin: Timestamp,
            end:   Timestamp,
            dur:   Timestamp,
            frameRate: /^\d+$/
        };

        TimedTextAttributes.NAMESPACE = {
            frameRate: 'ttp'
        };

        return TimedTextAttributes;
    }
);
