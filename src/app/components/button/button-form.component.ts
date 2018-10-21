import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component, OnInit } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'node_modules/wavesurfer.js/src/plugin/regions.js';

@Component({
  selector: 'button-dialog',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.css']
})
export class ButtonFormComponent implements OnInit {

  wavesurfer;
  fileLoaded;
  isPlaying;

  constructor(
    public dialogRef: MatDialogRef<ButtonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    const region = RegionsPlugin.create();
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      plugins: [region]
    });



    this.wavesurfer.on('ready', () => {
      this.wavesurfer.enableDragSelection({});
    });

    this.wavesurfer.on('region-created', event => {
      this.wavesurfer.clearRegions();
    });

    this.wavesurfer.on('region-update-end', event => {
      this.data.region = {
        start: event.start,
        end: event.end
      };
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setFile(file) {

    this.wavesurfer.loadBlob(file);
    this.fileLoaded = true;
    this.data.file = file;
  }

  playPause() {
    this.wavesurfer.playPause();
    this.isPlaying = !this.isPlaying;
  }
}
