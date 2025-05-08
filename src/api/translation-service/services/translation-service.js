'use strict';

/**
 * translation-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::translation-service.translation-service');
