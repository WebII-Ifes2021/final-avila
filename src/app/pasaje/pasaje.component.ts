import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {

  pasaje: any;
  mostrar= false;
  precioFinal: number;

  pasajeForm = new FormGroup({
    nombre: new FormControl(''),
    fechaDestino : new FormControl(''),
    precio: new FormControl('')
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit():  void {
    this.initPasajeForm();
  }

  initPasajeForm(){}

  
  guardar(){
    this.pasaje=this.pasajeForm.value; 
  }

  onRecibe(event: number){
    this.mostrar = true;
    this.precioFinal = event;
  }


}