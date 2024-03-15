import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductwithapiComponent } from './newproductwithapi.component';

describe('NewproductwithapiComponent', () => {
  let component: NewproductwithapiComponent;
  let fixture: ComponentFixture<NewproductwithapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewproductwithapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewproductwithapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
