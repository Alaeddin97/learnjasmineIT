/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { empty, from, Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class RouterStub{
  navigate(params:any){
  }
}
class ActivatedRouteStub{
  private subject = new Subject();

  push(value:any){
    this.subject.next(value);
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be redirected to users page after the user saving ', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  })

  it('should be redirected to not-found page if id is zero', () => {
    let route:ActivatedRouteStub = TestBed.get(ActivatedRoute);
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');

    route.push({'id':0});
    component.ngOnInit();
    
    expect(spy).toHaveBeenCalledWith(['not-found']);
  })
});
