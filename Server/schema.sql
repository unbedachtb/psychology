create table assessments(
  id serial primary key not null,
  name varchar(30),
  description varchar(180)
);

create table questions(
  id serial primary key not null,
  assessments_id int references assessments,
  question varchar(400)
);

create table users(
  id serial primary key not null,
  username varchar(400),
  password varchar(400)
);

create table results(
  id serial primary key not null,
  score int,
  
)
