import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharauthComponent } from './aadharauth.component';

describe('AadharauthComponent', () => {
  let component: AadharauthComponent;
  let fixture: ComponentFixture<AadharauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadharauthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadharauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
