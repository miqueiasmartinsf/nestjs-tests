import { Inject, Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { IUserRepository } from 'src/user/interfaces/IUserRepository';
import { RegisterDTO } from '../dtos/register.dto';

@Injectable()
@ValidatorConstraint({
    async: true,
})
export class UniqueEmailValidator implements ValidatorConstraintInterface {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) {}

    async validate(
        value: RegisterDTO,
        validationArguments?: ValidationArguments,
    ): Promise<boolean> {
        const userExits = await this.userRepository.findByEmail(value.email);

        console.log(123132);

        return false;
    }
}

export const IsUniqueEmail = (validationsOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationsOptions,
            constraints: [],
            validator: UniqueEmailValidator,
        });
    };
};
