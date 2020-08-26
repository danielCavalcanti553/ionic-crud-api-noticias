import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasDetalhePage } from './noticias-detalhe.page';

describe('NoticiasDetalhePage', () => {
  let component: NoticiasDetalhePage;
  let fixture: ComponentFixture<NoticiasDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
