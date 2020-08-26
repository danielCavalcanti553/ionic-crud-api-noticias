import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoffPage } from './logoff.page';

describe('LogoffPage', () => {
  let component: LogoffPage;
  let fixture: ComponentFixture<LogoffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
