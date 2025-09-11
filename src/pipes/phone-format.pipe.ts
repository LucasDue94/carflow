import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';

    const digits = value.toString().replace(/\D/g, ''); // só números

    if (digits.length === 10) {
      // fixo (XX) XXXX-XXXX
      return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (digits.length === 11) {
      // celular (XX) XXXXX-XXXX
      return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      // se não bater com os formatos esperados, retorna cru
      return value.toString();
    }
  }
}
