import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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

    constructor(props: Omit<Course, 'id'>, id?: string) { //gerar ID
        Object.assign(this, props);

        if (!this.id) {
            this.id = uuid();
        }
    }
}