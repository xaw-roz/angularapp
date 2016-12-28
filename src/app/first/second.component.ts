import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second Works!
    </p>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  constructor() {
   /* const gulp = require('gulp');
    const imagemin = require('gulp-imagemin');

    gulp.task('default', () =>
      gulp.src('../images/!*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images compressed'))
    );*/
  }

  ngOnInit() {

  }

}
