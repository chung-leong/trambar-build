import { expect } from 'chai';

import * as PlainText from 'utils/plain-text';

describe('PlainText', function() {
    describe('#hasEmojiSupport()', function() {
        it ('should execute without throwing', function() {
            let result = PlainText.hasEmojiSupport();
            expect(result).to.be.a('boolean');
        })
    })
    describe('#renderEmoji', function() {
        it ('should return a list containing strings and ReactElement', function() {
            let text = 'Hello 😀😃😉😍😚 🤩😑😣😁😄😊😘☺ 🤔😶😥😂😅😋😗🙂 🤨🙄😮 🤣😆😎😙 🤗😐😏 🤐🍔🍕🍿🍳 🥖🥪🍖 🥟🍘 🥓🍞 🧀🌮🍗 🥠🍙🍚 🥡🥩🌯 🥗🥐🥚🌭 🥞🥨🥙🥫🍠🍱🍛🚛🛵🚄🚝💓💘 world';
            let result = PlainText.renderEmoji(text);
            let stringCount = result.filter((t) => {
                if (typeof(t) === 'string') {
                    return true;
                }
            }).length;
            let elementCount = result.filter((t) => {
                if (typeof(t) === 'object') {
                    return true;
                }
            }).length;
            expect(stringCount).to.be.above(0);
            expect(elementCount).to.be.above(0);
        })
    })
})
