import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Course } from './Course';

@Entity('teachers')
export class Teacher {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Course, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: 'courses_teachers',
        joinColumn: {
            name: "teacher_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        }
    })
    courses: Course[]

    constructor(props: Omit<Teacher, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}