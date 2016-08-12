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
