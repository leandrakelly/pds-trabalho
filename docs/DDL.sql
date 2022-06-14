CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "courses" (
  "id" uuid PRIMARY KEY,
  "name" varchar,
  "start_time" time,
  "end_time" time
);

CREATE TABLE "courses_teachers" (
  "course_id" uuid,
  "teacher_id" uuid,
  PRIMARY KEY ("course_id", "teacher_id")
);

CREATE TABLE "teachers" (
  "id" uuid PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "courses_classrooms" (
  "course_id" uuid,
  "classroom_id" uuid,
  PRIMARY KEY ("course_id", "classroom_id")
);

CREATE TABLE "classrooms" (
  "id" uuid PRIMARY KEY,
  "number" varchar
);

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("classroom_id") REFERENCES "classrooms" ("id");

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id");
