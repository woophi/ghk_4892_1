import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronRightMIcon } from '@alfalab/icons-glyph/ChevronRightMIcon';
import { WalletSIcon } from '@alfalab/icons-glyph/WalletSIcon';
import { ReactNode, useEffect } from 'react';
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
import { useInViewGAEvent } from './hooks/useInViewGAEvent';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

export const App = () => {
  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const ideasInView = useInViewGAEvent('4892_show_ideas1_var2');
  const ideas2InView = useInViewGAEvent('4892_show_ideas2_var2');
  const dfaInView = useInViewGAEvent('4892_show_dfa_var2');
  const calendarInView = useInViewGAEvent('4892_show_calendar1_var2');
  const crowdInView = useInViewGAEvent('4892_show_crowd_var2');
  const meshInView = useInViewGAEvent('4892_show_list1_var2');
  const featureInView = useInViewGAEvent('4892_show_feature_var2');

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="medium">
          Инвестиционный навигатор
        </Typography.TitleResponsive>

        <PureCell
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          href="a-investments://CA?type=place&value=ideasGallery"
          onClick={() => window.gtag('event', '4892_ideas1_var2')}
          ref={ideasInView.itemRef}
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
          style={{ backgroundColor: '#F2F3F5' }}
          onClick={() => {
            window.gtag('event', '4892_ideas2_var2');
            window.location.replace('a-investments://CA?type=place&value=ideasGallery');
          }}
          ref={ideas2InView.itemRef}
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
          style={{ backgroundColor: '#F2F3F5' }}
          onClick={() => {
            window.gtag('event', '4892_dfa_var2');
            window.location.replace('a-investments://CA?type=crossAuth&value=dfa');
          }}
          ref={dfaInView.itemRef}
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
              window.gtag('event', `4892_strategy${itemIndex + 1}_var2`);
              window.location.replace(item.link);
            }}
          >
            <StrategySlideContent item={item} itemIndex={itemIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={appSt.container}>
        <PureCell
          style={{ marginTop: '1rem', marginLeft: '4px' }}
          href="a-investments://CA?type=calendar"
          onClick={() => window.gtag('event', '4892_calendar1_var2')}
          ref={calendarInView.itemRef}
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
              window.gtag('event', `4892_calendar${itemIndex + 2}_var2`);
              window.location.replace(item.link);
            }}
          >
            <CalendarSlideContent item={item} itemIndex={itemIndex} />
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
              window.gtag('event', `4892_razm${itemIndex + 1}_var2`);
              window.location.replace(item.link);
            }}
            style={{ backgroundColor: item.bgColor }}
          >
            <PlacesSlideContent item={item} itemIndex={itemIndex} />
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
          style={{ backgroundColor: '#F2F3F5', paddingRight: '0' }}
          onClick={() => {
            window.gtag('event', '4892_crowd_var2');
            window.location.replace('a-investments://CA?type=crowdlending&value=crowdlending');
          }}
          ref={crowdInView.itemRef}
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
          onClick={() => window.gtag('event', '4892_list1_var2')}
          ref={meshInView.itemRef}
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
            window.gtag('event', '4892_list2_var2');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#F2F3F5' }}
        >
          <MeshContent
            eventName="4892_show_list2_var2"
            imgContent={<img className={appSt.imgSlider3} src={group1} width={62} height={78} />}
            subtitle="Смешанные"
            title="Золото опять в цене"
            subtitleColor="#0404138C"
          />
        </SwiperSlide>
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list3_var2');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#F2F3F5' }}
        >
          <MeshContent
            eventName="4892_show_list3_var2"
            imgContent={<img className={appSt.imgSlider3} src={group2} width={104} height={78} />}
            subtitle="Облигации"
            title="Рублевые облигации"
          />
        </SwiperSlide>
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list4_var2');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#F2F3F5' }}
        >
          <MeshContent
            eventName="4892_show_list3_var2"
            imgContent={<img className={appSt.imgSlider3} src={group3} width={80} height={78} />}
            subtitle="Акции"
            title="Стратегия на II квартал"
            subtitleColor="#0404138C"
          />
        </SwiperSlide>
        <SwiperSlide
          className={appSt.swSlide3}
          onClick={() => {
            window.gtag('event', '4892_list5_var2');
            window.location.replace('a-investments://CA?type=collections&value=9805');
          }}
          style={{ backgroundColor: '#F2F3F5' }}
        >
          <MeshContent
            eventName="4892_show_list4_var2"
            imgContent={<img className={appSt.imgSlider3} src={group4} width={80} height={78} />}
            imgContent2={<img src={group41} width={40} height={44} />}
            subtitle="Акции"
            title="Лидеры Альфа-Рейтинга"
          />
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
          style={{ backgroundColor: '#F2F3F5' }}
          onClick={() => {
            window.gtag('event', '4892_feature_var2');
            window.location.replace('a-investments://CA?type=place&value=tipRanks');
          }}
          ref={featureInView.itemRef}
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

const StrategySlideContent = ({ item, itemIndex }: { item: (typeof firstSliderData)[0]; itemIndex: number }) => {
  const itemInView = useInViewGAEvent(`4892_show_strategy${itemIndex + 1}_var2`);

  return (
    <>
      <div className={appSt.chips} ref={itemInView.itemRef}>
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
    </>
  );
};
const CalendarSlideContent = ({ item, itemIndex }: { item: (typeof secondSliderData)[0]; itemIndex: number }) => {
  const itemInView = useInViewGAEvent(`4892_show_calendar${itemIndex + 2}_var2`);

  return (
    <>
      <div ref={itemInView.itemRef}>
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
    </>
  );
};
const PlacesSlideContent = ({ item, itemIndex }: { item: (typeof thirdSliderData)[0]; itemIndex: number }) => {
  const itemInView = useInViewGAEvent(`4892_show_razm${itemIndex + 1}_var2`);

  return (
    <>
      <div ref={itemInView.itemRef}>
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
    </>
  );
};

const MeshContent = ({
  eventName,
  imgContent,
  subtitle,
  title,
  subtitleColor,
  imgContent2,
}: {
  title: string;
  subtitle: string;
  imgContent: ReactNode;
  imgContent2?: ReactNode;
  eventName: string;
  subtitleColor?: string;
}) => {
  const itemInView = useInViewGAEvent(eventName);

  return (
    <>
      <div ref={itemInView.itemRef}>
        <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium">
          {title}
        </Typography.TitleResponsive>
      </div>

      <div className={appSt.row}>
        <Typography.Text style={{ color: subtitleColor }} view="secondary-medium" tag="p" defaultMargins={false}>
          {subtitle}
        </Typography.Text>
        {imgContent2}
      </div>
      {imgContent}
    </>
  );
};
