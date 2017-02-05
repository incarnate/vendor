/* global AFRAME */

/**
 * Component that listens to an event, selects card and "processes transaction"
 */
AFRAME.registerComponent('pick-card', {
    schema: {
        on: { type: 'string' },
        card: { type: 'string' }
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        el.addEventListener('click', function () {

            // Send data.card to backend server and process payment

            document.querySelector("#camera").setAttribute('rotation', {x: 0, y: 0, z: 0});
            document.getElementById('products').setAttribute('visible', 'false');
            document.getElementById('cards').setAttribute('visible', 'false');
            document.getElementById('success').setAttribute('visible', 'true');

            console.log('Card ' + data.card + ' selected');
        });
    }
});
