import { Injectable } from '@angular/core';

import {Camera,CameraResultType,CameraSource,Photo} from '@capacitor/camera'
import { WebView } from '@capacitor/core';
import {Filesystem,Directory} from '@capacitor/filesystem'
import {Preferences} from '@capacitor/preferences'
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: UserPhoto[]=[];
  constructor() { }
  public async addNewGallery() {
    //take a photo
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturePhoto.webPath!
  })
}
}
export interface UserPhoto{
  filepath: string;
  webviewPath?: string;
}
