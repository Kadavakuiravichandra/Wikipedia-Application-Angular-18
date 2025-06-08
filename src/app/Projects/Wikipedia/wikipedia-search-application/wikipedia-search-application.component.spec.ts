import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaSearchApplicationComponent } from './wikipedia-search-application.component';

describe('WikipediaSearchApplicationComponent', () => {
  let component: WikipediaSearchApplicationComponent;
  let fixture: ComponentFixture<WikipediaSearchApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikipediaSearchApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikipediaSearchApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
