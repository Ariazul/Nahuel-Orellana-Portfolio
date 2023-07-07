import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent {

  constructor(private _CargaSccript:CargarScriptsService){
    _CargaSccript.Carga(["multiplayer"]);
  }

}
