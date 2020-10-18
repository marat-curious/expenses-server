#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$DB_USER" --dbname "$DB_NAME" <<-EOSQL
  CREATE TABLE users (
    username varchar(10),
    salt varchar(22),
    hash varchar(32)
  );
EOSQL
