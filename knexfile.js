// Update with your config settings.

module.exports = {
  development: {
    // our DBMS driver
    client: 'sqlite3',
    connection: {
      // the location of our db
      filename: './data/car-dealer.db3'
    },
    // necessary when using sqlite3
    useNullAsDefault: true
  }
};
//Deleted the rest of the code below which was not necesary
