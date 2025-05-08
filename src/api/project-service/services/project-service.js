'use strict';

/**
 * project-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-service.project-service');
