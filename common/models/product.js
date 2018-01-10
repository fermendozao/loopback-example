'use strict';

module.exports = function(Product) {
  /**
   * Buy this product
   * @param {number} quantity Number of products to buy
   * @param {Function(Error, object)} callback
   */

  const validQuantity = quantity => Boolean(quantity > 0);

  Product.prototype.buy = function(quantity, callback) {
    if (!validQuantity(quantity)) {
      return callback(`Invalid quantity ${quantity}`);
    }

    const result = {
      status: `You bought ${quantity} product(s)`,
    };
    callback(null, result);
  };

};
