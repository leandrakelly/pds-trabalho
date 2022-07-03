import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Course } from './Course';

@Entity('classrooms')
export class Classroom {
    @PrimaryColumn()
    id: string;

    @Column()
    number: string;

    @ManyToMany(() => Course, {
        cascade: true,
        onDelete: 'CASCADE'
    })
    @JoinTable({
        name: 'courses_classrooms',
        joinColumn: {
            name: "classroom_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "course_id",
            referencedColumnName: "id"
        }
    })
    courses: Course[]

    constructor(props: Omit<Classroom, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}