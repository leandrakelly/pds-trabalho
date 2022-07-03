import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Classroom } from './Classroom';
import { Teacher } from './Teacher';
import { User } from './User';

export enum CourseStatus {
    NEW = "new",
    ON_GOING = "on_going",
    COMPLETED = "completed",
    CANCELED = "canceled"
}

@Entity('courses')
export class Course {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    start_time: string

    @Column()
    end_time: string

    @Column({
    type: "enum",
    enum: CourseStatus,
    default: CourseStatus.NEW
    })
    status: CourseStatus;

    @ManyToMany(() => Teacher, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: 'courses_teachers',
        joinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "teacher_id",
            referencedColumnName: "id"
        }
    })
    teachers: Teacher[]

    @ManyToMany(() => Classroom, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: 'courses_classrooms',
        joinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "classroom_id",
            referencedColumnName: "id"
        }
    })
    classrooms: Classroom[]

    @ManyToMany(() => User, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: 'courses_users',
        joinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        }
    })
    users: User[]

    constructor(props: Omit<Course, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}