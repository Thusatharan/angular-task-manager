import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTasksComponent } from './study-tasks.component';

describe('StudyTasksComponent', () => {
  let component: StudyTasksComponent;
  let fixture: ComponentFixture<StudyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
