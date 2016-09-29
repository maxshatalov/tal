require(
    [
        'antie/subtitles/timedtextattributes',
        'antie/subtitles/timedtextelement'
    ],
    function(TimedTextAttributes, TimedTextElement) {
        'use strict';

        describe('antie.subtitles.TimedTextElement', function() {
            it('starts off with empty attributes object', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                expect(el.getAttributes()).toEqual(jasmine.any(TimedTextAttributes));
                expect(el.getAttributes()._attributeMap).toEqual({});
            });

            it('returns node name', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                expect(el.getNodeName()).toBe(TimedTextElement.NODE_NAME.text);
            });

            it('returns no text of none set', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                expect(el.getText()).toBeNull();
            });

            it('sets/gets text', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                el.setText('Winston, you are drunk!');
                expect(el.getText()).toBe('Winston, you are drunk!');
            });
            
            it('returns null if a parent was not set', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.p);
                expect(el.getParent()).toBe(null);
            });
            
            it('throws an error if the the object supplied to the parent setter is not a TimedTextElement', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.p);
                
                //number
                var errorThrown = false;
                var invalidParentNumber = 1234;
                try {                    
                    el.setParent(invalidParentNumber);
                } catch (e) {
                    expect(e.message).toBe('TimedTextElement - parent should be a TimedTextElement but was: number. Value: 1234');
                    errorThrown = true;
                }
                expect(errorThrown).toBe(true); //fail the test if we didn't throw an error
                
                //string
                errorThrown = false;
                var invalidParentString = 'I am a string';
                try {
                    el.setParent(invalidParentString);
                } catch (e) {
                    expect(e.message).toBe('TimedTextElement - parent should be a TimedTextElement but was: string. Value: I am a string');
                    errorThrown = true;
                }
                expect(errorThrown).toBe(true); //fail the test if we didn't throw an error
                 
                //boolean
                errorThrown = false;
                var invalidParentBoolean = true;
                try {
                    el.setParent(invalidParentBoolean);
                } catch (e) {
                    expect(e.message).toBe('TimedTextElement - parent should be a TimedTextElement but was: boolean. Value: true');
                    errorThrown = true;
                }
                expect(errorThrown).toBe(true); //fail the test if we didn't throw an error
            });

            it('returns the parent if it was set', function() {
                var parent = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.p);
                el.setParent(parent);

                expect(el.getParent()).toBe(parent);
            });

            it('returns no children if none have been supplied', function() {
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                
                expect(el.getChildren()).toEqual([]);
            });
            
            it('throws an error if the the children supplied to the constructor are not in an array', function() {
                //timedtextelement not in array
                var errorThrown = false;
                var invalidChildrenSolo = new TimedTextElement(TimedTextElement.NODE_NAME.text);
                try {
                    new TimedTextElement(TimedTextElement.NODE_NAME.p, invalidChildrenSolo);
                } catch (e) {
                    expect(e.message).toBe('TimedTextElement - children should be an array but was: object. Value: [object Object]');
                    errorThrown = true;
                }
                expect(errorThrown).toBe(true); //fail the test if we didn't throw an error
                
                //string
                errorThrown = false;
                var invalidChildrenString = 'I am a string';
                try {
                    new TimedTextElement(TimedTextElement.NODE_NAME.p, invalidChildrenString);
                } catch (e) {
                    expect(e.message).toBe('TimedTextElement - children should be an array but was: string. Value: I am a string');
                    errorThrown = true;
                }
                expect(errorThrown).toBe(true); //fail the test if we didn't throw an error
            });

            it('returns the children supplied to the constructor', function() {
                var children = [
                    new TimedTextElement(TimedTextElement.NODE_NAME.text),
                    new TimedTextElement(TimedTextElement.NODE_NAME.span)
                ];
                
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.p, children);

                expect(el.getChildren()).toEqual(children);
                expect(el.getChildren()).not.toBe(children); // It's a copy of the original array
            });

            it('returns empty timing points if no times specified', function() {
                var children = [
                    new TimedTextElement(TimedTextElement.NODE_NAME.text),
                    new TimedTextElement(TimedTextElement.NODE_NAME.span)
                ];
                var el = new TimedTextElement(TimedTextElement.NODE_NAME.p, children);

                // Method under test
                expect(el.getTimingPoints()).toEqual([]);
            });
        });
    }
);
