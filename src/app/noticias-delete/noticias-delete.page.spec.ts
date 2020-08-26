import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasDeletePage } from './noticias-delete.page';

describe('NoticiasDeletePage', () => {
  let component: NoticiasDeletePage;
  let fixture: ComponentFixture<NoticiasDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
