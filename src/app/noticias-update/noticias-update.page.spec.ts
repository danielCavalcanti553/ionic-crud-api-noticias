import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasUpdatePage } from './noticias-update.page';

describe('NoticiasUpdatePage', () => {
  let component: NoticiasUpdatePage;
  let fixture: ComponentFixture<NoticiasUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
