// Based on https://github.com/facebook/flux/issues/351#issuecomment-243175376

const flux_utils = require('flux/utils')

module.exports = function FluxContainerCreate(containerClass, options) {
    const tmp = containerClass;
    containerClass = function(...args) {
        return new tmp(...args);
    };
    containerClass.prototype = tmp.prototype;
    containerClass.getStores = tmp.getStores;
    containerClass.calculateState = tmp.calculateState;
    return flux_utils.Container.create(containerClass, options);
}
