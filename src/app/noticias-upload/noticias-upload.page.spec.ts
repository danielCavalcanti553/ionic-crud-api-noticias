import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasUploadPage } from './noticias-upload.page';

describe('NoticiasUploadPage', () => {
  let component: NoticiasUploadPage;
  let fixture: ComponentFixture<NoticiasUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasUploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
