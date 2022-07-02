import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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