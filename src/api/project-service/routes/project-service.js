'use strict';

/**
 * project-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::project-service.project-service');
