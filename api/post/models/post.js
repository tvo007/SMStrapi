'use strict';

const {v4: uuidv4} = require('uuid')



/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  /**
   * Triggered before uid creation.
   */
  lifecycles: {

    async beforeCreate (data) {
      data.uid = uuidv4();
    }

    
  },

  lifecycles: {
    async beforeUpdate (uid, data) {
        data.uid = uuidv4();
    }
  }
};
