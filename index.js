'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    var o = {} // empty Object
    var key = 'Deals';
    o[key] = []; // empty Array, which you can push() values into
    var data = {
        name: 'CiCis Pizza',
        phone: '555-555-5555',
        address: '123 Main St, St. Petersburg FL 33701'
    };
    var data2 = {
        name: 'ABC Pizza',
        phone: '555-555-5555',
        address: '123 Central Ave, St. Petersburg FL 33701'
    };
    o[key].push(data);
    o[key].push(data2);
    
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    callback(null, JSON.stringify(o));  // Echo back the first key value
    //callback('Something went wrong');
};
