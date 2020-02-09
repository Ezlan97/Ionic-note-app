import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Note } from '../note';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  notes: Note[] = [];
  
  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) {}

    ngOnInit() {
      this.getNotes();
    }
    
    async getNotes() {
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
      await this.api.getNotes()
      .subscribe(res => {
        this.notes = res;
        console.log(this.notes);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }

    addProduct() {
      this.router.navigate(['/note-create']);
    }
    
    //drag n drop
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
    }
  }
