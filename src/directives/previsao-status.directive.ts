import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[previsaoStatus]',
  standalone: true
})
export class PrevisaoStatusDirective implements OnChanges {
  @Input('previsaoStatus') previsao!: string | Date | null | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (!this.previsao) return;

    const date = new Date(this.previsao);
    const now = new Date();

    const diffMs = +date - +now;
    const diffHours = diffMs / (1000 * 60 * 60);

    let color = '';

    if (diffHours < 0) {
      // já passou
      color = '#E53935'; // vermelho
    } else if (diffHours <= 1) {
      // falta até 1h
      color = '#FFB300'; // laranja
    } else {
      // ainda no prazo
      color = '#43A047'; // verde
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff'); // contraste
    this.renderer.setStyle(this.el.nativeElement, 'padding', '4px 8px'); // opcional
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '4px'); // opcional
  }
}
