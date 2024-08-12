import { Inject, Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { IUserRepository } from 'src/user/interfaces/IUserRepository';

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
        value: any,
        validationArguments?: ValidationArguments,
    ): Promise<boolean> {
        const userExits = await this.userRepository.findByEmail(value);

        return !userExits;
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
