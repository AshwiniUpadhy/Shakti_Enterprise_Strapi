'use strict';

/**
 * dtp-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dtp-service.dtp-service');
