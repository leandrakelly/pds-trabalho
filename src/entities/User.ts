import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Course } from './Course';

export enum UserRole {
    STUDENT = "student",
    ADMIN = "admin"
}

@Entity('users')
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Course, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: 'courses_users',
        joinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        }
    })
    courses: Course[]

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.STUDENT
        })
        role: UserRole;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}