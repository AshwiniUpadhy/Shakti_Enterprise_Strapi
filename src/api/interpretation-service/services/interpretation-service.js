'use strict';

/**
 * interpretation-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interpretation-service.interpretation-service');
