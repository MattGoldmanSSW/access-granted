import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lottieConfig: Object;

  private anim: any;
  private animationSpeed: number;

  ngOnInit() {
      
    this.animationSpeed = 15;
  }

  constructor() {
    this.lottieConfig = {
        path: '../assets/snakestaff.json', 
        autoplay: true,
        loop: false
    };
  }
  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }
}
