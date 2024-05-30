import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiladminComponent } from './profiladmin.component';

describe('ProfiladminComponent', () => {
  let component: ProfiladminComponent;
  let fixture: ComponentFixture<ProfiladminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfiladminComponent]
    });
    fixture = TestBed.createComponent(ProfiladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
