import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonPageComponent } from './new-person-page.component';

describe('NewPersonPageComponent', () => {
  let component: NewPersonPageComponent;
  let fixture: ComponentFixture<NewPersonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPersonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
