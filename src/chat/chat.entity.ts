import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class Chat {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public userId: string;
 
  @Column()
  public message: string;
}
 
export default Chat;