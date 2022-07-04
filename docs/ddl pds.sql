CREATE TYPE "users_role" AS ENUM (
  'student',
  'admin'
);

CREATE TYPE "courses_status" AS ENUM (
  'new',
  'on_going',
  'completed',
  'canceled'
);

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "email" varchar,
  "password" varchar,
  "role" users_role
);

CREATE TABLE "courses_users" (
  "course_id" uuid,
  "user_id" uuid,
  "created_at" timestamp,
  PRIMARY KEY ("course_id", "user_id")
);

CREATE TABLE "courses" (
  "id" uuid PRIMARY KEY,
  "name" varchar,
  "start_time" time,
  "end_time" time,
  "status" courses_status
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

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("classroom_id") REFERENCES "classrooms" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_users" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_users" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;
