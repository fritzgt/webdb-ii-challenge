// Update with your config settings.

module.exports = {
  development: {
    // our DBMS driver
    client: 'sqlite3',
    connection: {
      // the location of our db
      filename: './car-dealer.db3'
    },
    // necessary when using sqlite3
    useNullAsDefault: true
  },
  migrations: {
    directory: './migrations'
  },
  //seeds for dummy data
  //To run it use command
  //npx knex seed:run
  seeds: {
    directory: './seeds'
  }
};
//Deleted the rest of the code below which was not necesary
