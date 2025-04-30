import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';

import imgs1 from './assets/s1.png';
import imgs2 from './assets/s2.png';
import imgs3 from './assets/s3.png';
import imgs4 from './assets/s4.png';

import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';

export const firstSliderData = [
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Рантье',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+13% в год',
    img: img1,
    bgColor: '#7aa73d',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=59',
  },
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Акции+',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+13% в год',
    img: img2,
    bgColor: '#d9a654',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=12',
  },
  {
    chips: ['70 000 ₽', 'Высокий риск'],
    title: 'Лидеры рынка',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+28,7% в год',
    img: img3,
    bgColor: '#d9a654',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=79',
  },
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Стратегия роста',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+24,4% в год',
    img: img4,
    bgColor: '#d9a654',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=83',
  },
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Дивидендные акции',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+30% в год',
    img: img5,
    bgColor: '#d9a654',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=68',
  },
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Двойной доход',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+32% в год',
    img: img6,
    bgColor: '#7aa73d',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=69',
  },
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Новая экономика',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+30% в год',
    img: img7,
    bgColor: '#d9a654',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=86',
  },
  {
    chips: ['200 000 ₽', 'Очень низкий риск', '+24,3% за всё время'],
    title: 'Идеи от Гуру',
    subtitle: 'Ожидаемая доходность',
    subtitle2: '+30% в год',
    img: img8,
    bgColor: '#d9a654',
    link: 'a-investments://CA/5e297195?type=strategiesWidget&value=92',
  },
];

export const secondSliderData = [
  {
    img: imgs1,
    title: 'Дивиденды',
    subtitle: 'Успейте купить в этом месяце',
    link: 'a-investments://CA?type=calendar&value=dividend',
  },
  {
    img: imgs2,
    title: 'Купоны',
    subtitle: 'Доход вместо депозита',
    link: 'a-investments://CA?type=calendar&value=coupon',
  },
  {
    img: imgs3,
    title: 'Отчёты',
    subtitle: 'Узнайте о ближайших публикациях',
    link: 'a-investments://CA?type=calendar&value=report',
  },
  {
    img: imgs4,
    title: 'Погашения и оферты',
    subtitle: 'Выплата номинала облигаций',
    link: 'a-investments://CA?type=calendar&value=maturity',
  },
];

export const thirdSliderData = [
  {
    img: logo1,
    title: 'ЗПИФ “Складская коллекция 2”',
    subtitle: 'Фонды, RUB',
    textRow: (
      <>
        Участие
        <br />
        от 57 500 ₽
      </>
    ),
    link: 'a-investments://CA?type=ipo&value=1150',
    bgColor: '#146A99',
  },
  {
    img: logo2,
    title: 'Садко 001Р-01',
    subtitle: 'Облигации, RUB',
    textRow: 'Купон 23.5%',
    link: 'a-investments://CA?type=ipo&value=1191',
    bgColor: '#4E428B',
  },
  {
    img: logo3,
    title: 'ВЕРАТЕК 01',
    subtitle: 'Облигации, RUB',
    textRow: 'Купон 26%',
    link: 'a-investments://CA?type=ipo&value=1232',
    bgColor: '#6B88CB',
  },
];
