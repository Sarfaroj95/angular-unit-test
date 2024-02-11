import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Html  class element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".fullName").textContent).toContain('Sarfaroj')
  })

  it('Html tag element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector("h2").textContent).toContain("Test text")
  })

  it('Function element', () => {

    expect(component.sum()).toBe(100)
  })
  it('Function with pass var', () => {

    expect(component.sumVar(50,50)).toBe(100)
  })


  it('Should be zero', ()=> {
    expect(component.totalSub(10, 5)).toBe(5)
  })

});
