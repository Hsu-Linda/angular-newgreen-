import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePicturesComponent } from './home-page-pictures.component';

describe('HomePagePicturesComponent', () => {
  let component: HomePagePicturesComponent;
  let fixture: ComponentFixture<HomePagePicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePagePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
