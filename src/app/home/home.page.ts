
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  bildirimListe;

  constructor() {}
  async getObject() {
    const ret = await Storage.get({ key: 'bildirimler' });
    this.bildirimListe = JSON.parse(ret.value);
    console.log(this.bildirimListe);
  }


}
