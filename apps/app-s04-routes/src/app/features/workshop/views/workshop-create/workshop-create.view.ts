import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from 'apps/app-s04-routes/src/app/common/interfaces/component-can-deactivate.interface';

@Component({
  templateUrl: './workshop-create.view.html',
  styleUrls: ['./workshop-create.view.scss']
})
export class WorkshopCreateView implements OnInit, ComponentCanDeactivate {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    // SE LLAMA AL SERVICIO QUE GUARDA EL TALLER

    // RECOMENDADO PARA REDIRIGIR A RUTAS SIN PARAMETROS
    this.router.navigateByUrl('/talleres');

    // RECOMENDADO PARA REDIRIGIR A RUTAS CON PARAMETROS
    this.router.navigate(['/talleres']);

  }

  canDeactivate() {
    const ok = confirm('Si sales de esta pantalla, perderas los cambios?');
    return ok;
  }

}
