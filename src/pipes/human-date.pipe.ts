import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanDate',
  standalone: true
})
export class HumanDatePipe implements PipeTransform {
  transform(value: string | Date | null| undefined): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const formatter = new Intl.DateTimeFormat('pt-BR', options);

    const time = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffDays = Math.round((+target - +today) / (1000 * 60 * 60 * 24));

    // Diferença em horas
    const diffHours = Math.round((+date - +now) / (1000 * 60 * 60));

    if (diffDays === 0) {
      // Mesmo dia → usa horas
      if (diffHours > 0) {
        return `em até ${diffHours}h`;
      } else if (diffHours < 0) {
        return `há ${Math.abs(diffHours)}h`;
      } else {
        return `agora`;
      }
    } else if (diffDays === 1) {
      return `amanhã às ${time}h`;
    } else if (diffDays === -1) {
      return `ontem às ${time}h`;
    } else if (diffDays > 1 && diffDays < 7) {
      const weekday = formatter.format(date);
      return `${weekday} às ${time}h`;
    } else if (diffDays < -1 && diffDays > -7) {
      const weekday = formatter.format(date);
      return `${weekday.replace('-feira', '')} passada`;
    } else {
      const weekday = formatter.format(date);
      return `${weekday} dia ${date.getDate()}, ${time}h`;
    }
  }
}
