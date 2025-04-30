import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronRightMIcon } from '@alfalab/icons-glyph/ChevronRightMIcon';
import { WalletSIcon } from '@alfalab/icons-glyph/WalletSIcon';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cfa from './assets/cfa.png';
import group1 from './assets/group1.png';
import group2 from './assets/group2.png';
import group3 from './assets/group3.png';
import group4 from './assets/group4.png';
import group41 from './assets/group41.png';
import investBg from './assets/invest.png';
import pog from './assets/pog.png';
import potok from './assets/potok.png';
import { firstSliderData, secondSliderData, thirdSliderData } from './data';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

export const App = () => {
  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="medium">
          Инвестиционный навигатор
        </Typography.TitleResponsive>

        <PureCell
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          href="a-investments://CA?type=place&value=ideasGallery"
          onClick={() => window.gtag('event', '4892_ideas1_var1')}
        >
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-large" tag="p" weight="medium" defaultMargins={false}>
                Идеи чтобы заработать
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <ChevronRightMIcon color="#05081D61" />
          </PureCell.Graphics>
        </PureCell>

        <div
          className={appSt.banner}
          style={{ backgroundColor: '#8a74ff' }}
          onClick={() => {
            window.gtag('event', '4892_ideas2_var1');
            window.location.replace('a-investments://CA?type=place&value=ideasGallery');
          }}
        >
          <div className={appSt.bannerText}>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Что покупать и когда продавать
            </Typography.TitleResponsive>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Чтобы регулярно получать доход
            </Typography.Text>
          </div>
          <img src={investBg} width={128} height={128} />
        </div>

        <Typography.Text
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={false}
        >
          ЦФА
        </Typography.Text>

        <div
          className={appSt.banner}
          style={{ backgroundColor: '#6a4dff' }}
          onClick={() => {
            window.gtag('event', '4892_dfa_var1');
            window.location.replace('a-investments://CA?type=crossAuth&value=dfa');
          }}
        >
          <div className={appSt.bannerText}>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Цифровые финансовые активы
            </Typography.TitleResponsive>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Инвестиции на блокчейне
            </Typography.Text>
          </div>
          <img src={cfa} width={128} height={128} />
        </div>

        <PureCell style={{ marginTop: '1rem', marginLeft: '4px' }}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-large" tag="p" weight="medium" defaultMargins={false}>
                Стратегии и автоследование
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <ChevronRightMIcon color="#05081D61" />
          </PureCell.Graphics>
        </PureCell>
      </div>
      <Swiper style={{ marginLeft: '1rem' }} spaceBetween={8} slidesPerView="auto">
        {firstSliderData.map((item, itemIndex) => (
          <SwiperSlide
            key={item.title}
            className={appSt.swSlide}
            style={{ backgroundColor: item.bgColor }}
            onClick={() => {
              window.gtag('event', `4892_strategy${itemIndex + 1}_var1`);
              window.location.replace(item.link);
            }}
          >
            <div className={appSt.chips}>
              {item.chips.map((chip, index) => (
                <div key={index} className={appSt.chip}>
                  {index === 0 && <WalletSIcon />} <Typography.Text view="primary-medium">{chip}</Typography.Text>
                </div>
              ))}
            </div>

            <div>
              <Typography.Text view="primary-medium" tag="p" weight="bold" defaultMargins={false}>
                {item.title}
              </Typography.Text>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                {item.subtitle}
              </Typography.Text>
              <Typography.Text view="primary-large" tag="p" defaultMargins={false}>
                {item.subtitle2}
              </Typography.Text>
            </div>

            <img className={appSt.imgSlider} src={item.img} width={218} height={218} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={appSt.container}>
        <PureCell
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          href="a-investments://CA?type=calendar"
          onClick={() => window.gtag('event', '4892_calendar1_var1')}
        >
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-large" tag="p" weight="medium" defaultMargins={false}>
                Календарь инвестора
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <ChevronRightMIcon color="#05081D61" />
          </PureCell.Graphics>
        </PureCell>
      </div>

      <Swiper style={{ marginLeft: '1rem' }} spaceBetween={8} slidesPerView="auto">
        {secondSliderData.map((item, itemIndex) => (
          <SwiperSlide
            key={item.title}
            className={appSt.swSlide2}
            onClick={() => {
              window.gtag('event', `4892_calendar${itemIndex + 2}_var1`);
              window.location.replace(item.link);
            }}
          >
            <div>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
                {item.title}
              </Typography.TitleResponsive>
            </div>

            <div>
              <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
                {item.subtitle}
              </Typography.Text>
            </div>

            <img className={appSt.imgSlider2} src={item.img} width={92} height={92} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={appSt.container}>
        <PureCell style={{ marginTop: '1rem', marginLeft: '4px' }}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-large" tag="p" weight="medium" defaultMargins={false}>
                Размещения
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <ChevronRightMIcon color="#05081D61" />
          </PureCell.Graphics>
        </PureCell>
      </div>

      <Swiper style={{ marginLeft: '1rem' }} spaceBetween={8} slidesPerView="auto">
        {thirdSliderData.map((item, itemIndex) => (
          <SwiperSlide
            key={item.title}
            className={appSt.swSlide3}
            onClick={() => {
              window.gtag('event', `4892_razm${itemIndex + 1}_var1`);
              window.location.replace(item.link);
            }}
            style={{ backgroundColor: item.bgColor }}
          >
            <div>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
                {item.title}
              </Typography.TitleResponsive>
              <Typography.Text view="secondary-large" tag="p" defaultMargins={false}>
                {item.subtitle}
              </Typography.Text>
            </div>

            <div className={appSt.row}>
              <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
                {item.textRow}
              </Typography.Text>
              <img src={item.img} width={40} height={40} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={appSt.container}>
        <Typography.Text
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={false}
        >
          Альтернативные инвестиции
        </Typography.Text>

        <div
          className={appSt.banner}
          style={{ backgroundColor: '#d6e8fc', color: 'initial', paddingRight: '0' }}
          onClick={() => {
            window.gtag('event', '4892_crowd_var1');
            window.location.replace('a-investments://CA?type=crowdlending&value=crowdlending');
          }}
        >
          <div className={appSt.bannerText}>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Краудлендинг с системой «Поток»
            </Typography.TitleResponsive>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Зарабатывайте от 23% на займах малому бизнесу
            </Typography.Text>
          </div>
          <img src={potok} width={128} height={128} style={{ objectFit: 'cover' }} />
        </div>

        <PureCell
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          href="a-investments://CA?type=collections"
          onClick={() => window.gtag('event', '4892_list1_var1')}
        >
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-large" tag="p" weight="medium" defaultMargins={false}>
                Подборки
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <ChevronRightMIcon color="#05081D61" />
          </PureCell.Graphics>
        </PureCell>
      </div>

      <Swiper style={{ marginLeft: '1rem' }} spaceBetween={8} slidesPerView="auto">
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list2_var1');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#6b88cb', color: 'initial' }}
        >
          <div>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Золото опять в цене
            </Typography.TitleResponsive>
          </div>

          <div className={appSt.row}>
            <Typography.Text style={{ color: '#0404138C' }} view="secondary-medium" tag="p" defaultMargins={false}>
              Смешанные
            </Typography.Text>
          </div>
          <img className={appSt.imgSlider3} src={group1} width={62} height={78} />
        </SwiperSlide>
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list3_var1');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#6b88cb', color: 'initial' }}
        >
          <div>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Рублевые облигации
            </Typography.TitleResponsive>
          </div>

          <div className={appSt.row}>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Облигации
            </Typography.Text>
          </div>
          <img className={appSt.imgSlider3} src={group2} width={104} height={78} />
        </SwiperSlide>
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list4_var1');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#efb8c8', color: 'initial' }}
        >
          <div>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Стратегия на II квартал
            </Typography.TitleResponsive>
          </div>

          <div className={appSt.row}>
            <Typography.Text style={{ color: '#0404138C' }} view="secondary-medium" tag="p" defaultMargins={false}>
              Акции
            </Typography.Text>
          </div>
          <img className={appSt.imgSlider3} src={group3} width={80} height={78} />
        </SwiperSlide>
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list5_var1');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#efb8c8', color: 'initial' }}
        >
          <div>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Лидеры Альфа-Рейтинга
            </Typography.TitleResponsive>
          </div>

          <div className={appSt.row}>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Акции
            </Typography.Text>
            <img src={group41} width={40} height={44} />
          </div>
          <img className={appSt.imgSlider3} src={group4} width={80} height={78} />
        </SwiperSlide>
      </Swiper>

      <div className={appSt.container}>
        <Typography.Text
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={false}
        >
          Прогнозы
        </Typography.Text>

        <div
          className={appSt.banner}
          style={{ backgroundColor: '#FDE6C8', color: 'initial' }}
          onClick={() => {
            window.gtag('event', '4892_feature_var1');
            window.location.replace('a-investments://CA?type=place&value=tipRanks');
          }}
        >
          <div className={appSt.bannerText}>
            <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
              Что будет с акциями через год
            </Typography.TitleResponsive>
            <Typography.Text style={{ color: '#0404138C' }} view="secondary-medium" tag="p" defaultMargins={false}>
              Мнение аналитиков ведущих инвестдомов
            </Typography.Text>
          </div>
          <img src={pog} width={128} height={128} />
        </div>
      </div>

      <Gap size={48} />
    </>
  );
};
