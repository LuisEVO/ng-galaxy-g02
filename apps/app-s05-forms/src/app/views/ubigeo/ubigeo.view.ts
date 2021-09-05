import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DEPARTAMENTOS } from '../../data/departamentos';
import { PROVINCIAS } from '../../data/provincias';

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.view.html',
  styleUrls: ['./ubigeo.view.scss']
})
export class UbigeoView implements OnInit {
  form: FormGroup;

  departamentos = DEPARTAMENTOS;
  provincias: any[] = [];

  get departamentoField(): FormControl {
    return this.form.get('departamento') as FormControl
  }

  get provinciaField(): FormControl {
    return this.form.get('provincia') as FormControl
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      provincia: null,
      departamento: null,
      distrito: null
    })

    this.departamentoField
    .valueChanges
    .subscribe(
      (departamentoId: string) => {
        this.provinciaField.setValue(null)
        this.provincias = PROVINCIAS[departamentoId] as any[];
        console.log(PROVINCIAS[departamentoId])
      }
    )
    
  }

  ngOnInit(): void {
  }

}
