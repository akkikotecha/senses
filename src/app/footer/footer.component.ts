import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  netImage: any = "./assets/SENSES LOGO.svg";

  constructor(private router: Router) { }

  homePageSustainability(): void {
    this.router.navigate(['/'])
      .then(() => {
        // window.location.reload();
        localStorage.setItem('Sustainability', "Sustainability")
        if (localStorage.getItem('Sustainability') == 'Sustainability') {
          setTimeout(() => {
            this.scroll();
          }, 1000);
        }
      });

  }

  logos(): void {
    this.router.navigate(['insights_two'])
      .then(() => {
        // window.location.reload();
        localStorage.setItem('logos', "logos")
        if (localStorage.getItem('logos') == 'logos') {
          setTimeout(() => {
            this.logosscroll();
          }, 1000);
        }
      });

  }

  blogs(): void {
    this.router.navigate(['insights_two'])
      .then(() => {
        // window.location.reload();
        localStorage.setItem('blogs', "blogs")
        if (localStorage.getItem('blogs') == 'blogs') {
          setTimeout(() => {
            this.blogsscroll();
          }, 1000);
        }
      });

  }

  project_case(): void {
    this.router.navigate(['insights_two'])
      .then(() => {
        // window.location.reload();
        localStorage.setItem('project_case', "project_case")
        if (localStorage.getItem('project_case') == 'project_case') {
          setTimeout(() => {
            this.project_casescroll();
          }, 1000);
        }
      });

  }


  scroll() {
    const element = document.getElementById('Sustainability');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('Sustainability', "")
    }
  }

  logosscroll() {
    const element = document.getElementById('logos');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('logos', "")
    }
  }

  blogsscroll() {
    const element = document.getElementById('blogs');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('blogs', "")
    }
  }

  project_casescroll() {
    const element = document.getElementById('project_case');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('project_case', "")
    }
  }
  ngOnInit(): void {


  }



}
