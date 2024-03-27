import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  public Name='Jasim Aboobacker'
  public email='jasimaboobacker@gmail.com'
  public phone='9497083630'
  public careergoal='I am passionate about becoming a full stack developer. I aim to combine my skills in front-end and back-end development to create innovative and user-friendly web applications. I am dedicated to continuously learning new technologies and expanding my knowledge to achieve this goal.'
  public skills='Html,Css,Javascript,Bootstrap,Scss,angular'
  public languages='English,Malayalam'
  public hobbies='Listening music,Driving and reading'
  public Git='https://github.com/jasimaboobacker1'
  public isDisabled=true;
  public myclass='red'
  public status='error'
  public text: string = 'Input value will display here';

  ngOnInit(): void {
   
  }
  
  KeyUp(value:string){
    this.text=value

  }
  change(){
    this.myclass = this.myclass === 'red' ? 'blue' : 'red';
  }
  

}
