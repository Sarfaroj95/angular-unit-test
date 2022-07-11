import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Ts_file variable ', ()=> {
    expect(component.myName).toBe('Tipu')
  })

  it('Html  class element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".fullName").textContent).toContain('Sarfaroj')
  })

  it('Html tag element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector("h2").textContent).toContain("home works!")
  })
  it('Function element', () => {
  
    expect(component.sum()).toBe(100)
  })
  it('Function with pass var', () => {
  
    expect(component.sumVar(50,50)).toBe(100)
  })

});
