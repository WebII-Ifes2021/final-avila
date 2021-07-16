import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'recargoPipe' })
export class recargoPipe implements PipeTransform {
    transform(value: number): number {
        const porcentaje = 0.10;
        if (!isNaN(value)){
            return value + (value * porcentaje);
        }
        return value;
    }
}