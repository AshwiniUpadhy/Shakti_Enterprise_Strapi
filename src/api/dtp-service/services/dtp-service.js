'use strict';

/**
 * dtp-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dtp-service.dtp-service');
