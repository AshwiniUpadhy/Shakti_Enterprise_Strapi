'use strict';

/**
 * localization-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::localization-service.localization-service');
