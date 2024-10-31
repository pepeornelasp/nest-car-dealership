import { IsString, MinLength, isString } from "class-validator";

export class CreateCarDto{
    @IsString({message: 'brand es una obligatorio y es de tipo string...'})
    readonly brand: string;
    @IsString()
    readonly model: string;
}