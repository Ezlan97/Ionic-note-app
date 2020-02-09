import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteCreatePage } from './note-create.page';

describe('NoteCreatePage', () => {
  let component: NoteCreatePage;
  let fixture: ComponentFixture<NoteCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
