/* global AFRAME */

/**
 * Component that listens to an event, then changes the scene to card selection
 */
AFRAME.registerComponent('pick-product', {
  schema: {
    on: {type: 'string'},
    choice: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    el.addEventListener('click', function () {

        drink = data.choice;

        document.querySelector("#camera").setAttribute('rotation', {x: 0, y: 0, z: 0});
        document.getElementById('products').setAttribute('visible', 'false');
        document.getElementById('cards').setAttribute('visible', 'true');
        document.getElementById('success').setAttribute('visible', 'false');

        document.getElementById('card-product').setAttribute('src', '#'+drink+'-texture');
        document.getElementById('success-product').setAttribute('src', '#'+drink+'-texture');

        console.log('Product ' + drink + ' selected');
    });
  }
});
