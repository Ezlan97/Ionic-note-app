import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  note: Note = { id: null, title: '', body: ''};
  isLoadingResults = false;

  constructor(
    public api: ApiService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  async getNote() {
    if (this.route.snapshot.paramMap.get('id') === 'null') {
      this.presentAlertConfirm('You are not choosing an item from the list');
    } else {
      this.isLoadingResults = true;
      await this.api.getNote(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {
          console.log(res);
          this.note = res;
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  ngOnInit() {
    this.getNote();
  }

  async deleteNote(id: any) {
    this.isLoadingResults = true;
    await this.api.deleteNote(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate([ '/home' ]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  editNote(id: any) {
    this.router.navigate([ '/note-edit', id ]);
  }
}
