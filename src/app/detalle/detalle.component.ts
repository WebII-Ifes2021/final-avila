import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recargoPipe } from '../pipes/recargo';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [recargoPipe]
})
export class DetalleComponent implements OnInit {

  @Input() pasajeComponent: any;

  @Output() eventPreFinal = new EventEmitter<number>();

  precioFinal: number;


  constructor(private recargoPipe: recargoPipe) { }



  ngOnInit(): void {
  }

  calcularPrecioFinal(){
    this.precioFinal = this.pasajeComponent.precio
    this.precioFinal = this.recargoPipe.transform(this.precioFinal); 
    this.eventPreFinal.emit(this.precioFinal);
  }

}
