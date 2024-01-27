'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/getting-started`,
    toPath: `https://jeremykreutzbender.com/blog/getting-started`,
    statusCode: 200,
  })
}
