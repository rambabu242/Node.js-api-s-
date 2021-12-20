import {
	Entity, Column, PrimaryGeneratedColumn 
} from 'typeorm';

@Entity() 
export class User {
    @PrimaryGeneratedColumn()
    	id!: number;

    @Column()
    	firstName!: string;

    @Column()
    	lastName!: string;

    @Column()
    	phoneNumber!: string;

    @Column()
    	email!: string;

    @Column() 
    	password!: string;

    @Column({
    	default: 0
    })
    	isArcheived!: number;

}