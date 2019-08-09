exports.up = function(knex) {
  // Within the up function
  //We write the ended database changes.
  //Required VIN, make, model, and mileage.
  // don't forget the return statement
  return knex.schema.createTable('inventory', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called VIN which is both required and unique
    tbl
      .text('VIN')
      .unique()
      .notNullable();
    // creates a text field called make which is both required
    tbl.text('make').notNullable();
    // creates a text field called model which is both required
    tbl.text('model').notNullable();
    // creates a Real/numbers field called mileage which is both required
    tbl.decimal('mileage').notNullable();
    // creates a text field called transmission-type
    tbl.text('transmission-type');
    // creates a text field called title-status
    tbl.text('title-status');
  });
};

exports.down = function(knex) {
  //Within the down function
  //We write the code that will undo these changes
  return knex.schema.dropTableIfExists('inventory');
};
