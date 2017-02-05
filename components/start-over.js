/* global AFRAME */

/**
 * Component that listens to an event, resets the scene to the start
 */
AFRAME.registerComponent('start-over', {
    schema: {
        on: { type: 'string' },
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        el.addEventListener('click', function () {
            drink = '';
            document.querySelector("#camera").setAttribute('rotation', {x: 0, y: 0, z: 0});
            document.getElementById('products').setAttribute('visible', 'true')
            document.getElementById('cards').setAttribute('visible', 'false')
            document.getElementById('success').setAttribute('visible', 'false')
            console.log('Start over');
        });
    }
});
