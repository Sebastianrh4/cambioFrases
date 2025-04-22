import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'minireto003-selectorFrases';

  indice = 0;

  frases = ['Si debuggear es el proceso de remover errores de código entonces programar debe ser el proceso de ponerlos .- Edsger Dijkstra',
  'Reglas de la optimización: Regla 1: No lo hagas, Regla 2 (sólo para expertos): No lo hagas todavía',
    'Primero resuelve el problema, después escribe el código',
    'Cualquier idiota puede escribir un programa que una computadora entiende, los verdaderos programadores pueden escribir código que los humanos entienden.',
    'Los programas deben ser escritos para que las personas lo lean y sólo casualmente para que las máquinas lo ejecuten',
    'Sin requerimientos o diseño programar sólo es el arte de agregar errores a un archivo vacío” .- Louis Srygley',
    'Cualquier código escrito que no hayas mirado en los últimos seis meses bien podría haber sido escrito por otra persona',
    'Es difícil encontrar un error en tu código cuando lo estás buscando, pero es mucho más difícil encontrarlo cuando asumes que tu código está libre de errores',
    'Siempre escribe tu código como si la persona que lo fuera a mantener fuera un peligroso psicópata que sabe quien eres y donde vives'];

    ngOnInit() {
      
    }

    get fraseActual(): string{
      return this.frases[this.indice];
    }

    fraseanterior() {
      if (this.indice> 0) this.indice--;
    }

    fraseSiguiente() {
      if (this.indice < this.frases.length - 1) this.indice++;
    }
}