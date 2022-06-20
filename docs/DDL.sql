CREATE TABLE IF NOT EXISTS "users" (
  "id" UUID PRIMARY KEY,
  "email" VARCHAR(100) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses" (
  "id" UUID PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "start_time" TIME WITHOUT TIME ZONE NOT NULL,
  "end_time" TIME WITHOUT TIME ZONE NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_teachers" (
  "course_id" UUID,
  "teacher_id" UUID,
  PRIMARY KEY ("course_id", "teacher_id")
);

CREATE TABLE IF NOT EXISTS "teachers" (
  "id" UUID PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_classrooms" (
  "course_id" UUID,
  "classroom_id" UUID,
  PRIMARY KEY ("course_id", "classroom_id")
);

CREATE TABLE IF NOT EXISTS "classrooms" (
  "id" UUID PRIMARY KEY,
  "number" VARCHAR(10) NOT NULL
);

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("classroom_id") REFERENCES "classrooms" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id") ON DELETE CASCADE;

INSERT INTO users ("id", "email", "password")
VALUES ('0ea33630-b146-4aff-a219-fed903a08ac4', 'admin@admin.com', 'admin_password');