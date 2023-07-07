import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.component.html',
  styleUrls: ['./musicplayer.component.css']
})
export class MusicplayerComponent {
  
  constructor(private _CargaSccript:CargarScriptsService){
    _CargaSccript.Carga(["musicplayer"]);
    _CargaSccript.Carga(["iconos"]);
  }

}
