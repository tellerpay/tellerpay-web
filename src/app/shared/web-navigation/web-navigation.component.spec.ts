import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNavigationComponent } from './web-navigation.component';

describe('WebNavigationComponent', () => {
  let component: WebNavigationComponent;
  let fixture: ComponentFixture<WebNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
