import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    public name = "Sayon";
  constructor() { }
    public myId="testId";
    public isDisabled = true;
    public successClass="text-success";
    public hasError=true;
  public isSpecial = true;
  public messageClass ={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public colorCase="yellow";
  public newName="";
  public displayName=true;
  public styleClasses={
    fontStyle: "bold",
    color: "pink",
    borderWidth: "2px",
    borderColor: "red",
    borderStyle: "dashed"
  }
  public colors = ["red","green","blue","yellow"];
  public highlightColor="orange";
  onClick(event){
    console.log(event);
    this.greeting='Welcome Sayon!!';
  }
  public greeting="";
  logEvent(value){
    console.log(value);
  }
  ngOnInit() {
  }
  public siteUrl=window.location.href;

    greetUser(){
      return "Hello "+this.name;
    }
    @Input('parentData') public parentName;
    @Output() public childEvent= new EventEmitter();
    fireEvent(){
      this.childEvent.emit('Hey CodeEvolution from test Component');
    }
    public date=new Date();

}