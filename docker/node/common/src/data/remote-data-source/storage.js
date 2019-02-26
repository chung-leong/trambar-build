import _ from 'lodash';
import Operation from 'data/remote-data-source/operation';

class Storage extends Operation {
    constructor(location, objects, options) {
        super(location);
        this.objects = objects;
        this.options = options || {};
        this.promise = null;
    }

    finish(results) {
        super.finish(results);

        if (!this.local) {
            for (let object of this.results) {
                object.rtime = this.finishTime;
            }
        }
    }
}

export {
    Storage as default,
    Storage,
};
