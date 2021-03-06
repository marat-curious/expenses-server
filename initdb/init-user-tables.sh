#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$DB_USER" --dbname "$DB_NAME" <<-EOSQL
  CREATE TABLE users (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    username varchar(24) NOT NULL,
    salt varchar(30) NOT NULL,
    hash varchar(60) NOT NULL
  );
EOSQL
