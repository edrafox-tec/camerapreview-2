import { Component } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions,
} from "@awesome-cordova-plugins/camera-preview/ngx";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image:any
  isToBack = false;
  constructor(private cameraPreview: CameraPreview) {}
  ionViewDidEnter(){
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 50,
      width: window.screen.width,
      height: window.screen.height,
      camera: "front",
      tapPhoto: true,
      previewDrag: false,
      toBack: true,
    };
    this.isToBack = true;
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  takePicture(){
    this.cameraPreview
    .takePicture({
      width: 1280,
      height: 1280,
      quality: 85,
    }).then((img)=>{
      this.image = 'data:image/jpeg;base64,'+img;
      this.cameraPreview.stopCamera()
    })
  }
}
