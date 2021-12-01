import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  faqs = [
    {
      id: 'fisrt',
      question: 'How can I become a Tellerpay Agent?',
      answer:
        "It's easy and quick to become a Tellerpay Agent. First, download the TellerAgent app on the playstore. All you have to do now is log in and fill in your personal information, phone number, and bank information. After that, you may fund your wallet and begin making transactions.",
    },
    {
      id: 'second',
      question: 'What transactions can I perform on the TellerAgent app?',
      answer:
        'You can:  Transfer money, Sell airtime, Pay for TV subscriptions, Pay electricity bills, Perform withdrawals, Activate data subscriptions, Fund betting wallets    ',
    },
    {
      id: 'third',
      question: 'How do I get a POS terminal?',
      answer: 'Please reach out to us directly.    ',
    },
    {
      id: 'fourth',
      question: 'What are your charges?',
      answer: 'Withdrawals - As low as 0.55% Transfers (N25)',
    },
    {
      id: 'fifth',
      question: 'How secure are my funds?',
      answer:
        'We are partnered with Letshego Microfinance Bank, and by extension, secured by the NDIC. This means that all funds are secured and insured, and you can rest assured.',
    },
    {
      id: 'sixth',
      question: 'Who do I talk to if I have a challenge?',
      answer:
        'You can reach us via email (hello@tellerpay.ng), phone (+2348021339688) and our social media platforms. Facebook: facebook.com/tellerpayng, Twitter: twitter.com/tellerpayng/, Instagram: instagram.com/tellerpayng, LinkedIn.',
    },
  ];
  searchInput!: string;
  filteredFaqs: Array<any>;
  currentId: string;
  constructor() {}

  ngOnInit() {
    this.filteredFaqs = this.faqs;
  }

  searchFaqs() {
		if (this.searchInput) {
			this.filteredFaqs = this.faqs.filter(element => {
				let filteredBeneficiaries = element.question.toLowerCase();
				return filteredBeneficiaries.includes(this.searchInput);
			});
		} else {
			this.filteredFaqs = this.faqs;
		}
	}
  selectFaq(faq){
    if(this.currentId === faq.id){
      this.currentId = ''
    }else{
      this.currentId = faq.id
    }
  }
}
