import { Repository, EntityRepository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common';
import * as phpUnserialize from 'phpunserialize';

import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });
        const groups = phpUnserialize(user.groups);

        if (user && await user.validatePassword(password)) {
            if (groups.length > 0) {
                return user.username
            } else {
                throw new UnauthorizedException('Don\'t have permission administrator');
            }
        } else {
            return null;
        }
    }
}