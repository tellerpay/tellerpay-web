import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let kaScroll = (function ($) {
      let s;

      return {
        settings: {
          $wrap: $('.wrap'),
          $wrap1: $('.wrap1'),
          $wrap2: $('.wrap2'),
        },

        init: function () {
          s = this.settings;
          this.bindUIActions();
        },

        bindUIActions: function () {
          kaScroll.slideOne();
          setTimeout(() => {
            kaScroll.slideTwo();
          }, 2000);
          setTimeout(() => {
            kaScroll.slideThree();
          }, 700);
        },

        slideOne: function () {
          s.$wrap
            .find('img')
            .first()
            .animate(
              {
                height: 'toggle',
              },
              10000,
              'linear',
              function () {
                kaScroll.appendEnd();
              }
            );
        },
        slideTwo: function () {
          s.$wrap1
            .find('img')
            .first()
            .animate(
              {
                height: 'toggle',
              },
              10000,
              'linear',
              function () {
                kaScroll.appendEndTwo();
              }
            );
        },
        slideThree: function () {
          s.$wrap2
            .find('img')
            .first()
            .animate(
              {
                height: 'toggle',
              },
              8000,
              'linear',
              function () {
                kaScroll.appendEndThree();
              }
            );
        },

        appendEnd: function () {
          s.$wrap.find('img').first().appendTo('.wrap').show();
          kaScroll.slideOne();
        },
        appendEndTwo: function () {
          s.$wrap1.find('img').first().appendTo('.wrap1').show();
          kaScroll.slideTwo();
        },
        appendEndThree: function () {
          s.$wrap2.find('img').first().appendTo('.wrap2').show();
          kaScroll.slideThree();
        },
      };
    })($);
    kaScroll.init();
  }
}
