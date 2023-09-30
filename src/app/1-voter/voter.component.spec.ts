import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations:[VoterComponent]
      }
    );

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 21;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('22');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  })

  it('should increase the totalVote when I click the upvote', () => {
    component.myVote = 10;

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    de.triggerEventHandler('click',null);

    expect(component.totalVotes).toBe(11);
  })
});
