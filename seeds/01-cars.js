exports.seed = function(knex) {
  // Deletes ALL existing entries and reset primary keys
  return knex('inventory')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('inventory').insert([
        //array of objects with starting/dummy data
        { VIN: 'KWER23SD', make: 'BMW', model: 'M3', mileage: 1234 },
        { VIN: 'WE3KWER23SD', make: 'TESLA', model: 'X', mileage: 10234 }
      ]);
    });
};
