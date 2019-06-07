'use strict';

/**
 * Portraits.js controller
 *
 * @description: A set of functions called "actions" for managing `Portraits`.
 */

module.exports = {

  /**
   * Retrieve portraits records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.portraits.search(ctx.query);
    } else {
      return strapi.services.portraits.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a portraits record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.portraits.fetch(ctx.params);
  },

  /**
   * Count portraits records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.portraits.count(ctx.query);
  },

  /**
   * Create a/an portraits record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.portraits.add(ctx.request.body);
  },

  /**
   * Update a/an portraits record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.portraits.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an portraits record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.portraits.remove(ctx.params);
  }
};
