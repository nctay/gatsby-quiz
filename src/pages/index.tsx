import * as React from 'react'
import { Typography } from '../components/Typography'
import { Button } from '../components/Button'
import { Spacer } from '../components/Spacer'
import { Flex } from '../components/Flex'
import { StaticImage } from 'gatsby-plugin-image'
import { TopScores } from '../components/TopScores'

// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const IndexPage = () => {
  return (
    <div>
      <Typography
        fontSize={14}
        lineHeight={17}
        fontWeight={700}
        textAlign="center"
        display="block"
        style={{ padding: '0 12px' }}
      >
        Участвуй в активностях на стенде компании, знакомься с нашими экспертами, заполняй анкеты обратной
        связи и получай призы от наc
      </Typography>
      <Spacer height={19} />
      <AniLink fade to="quiz">
        <Button>Участвовать в INNOQUIZ</Button>
      </AniLink>
      <Spacer height={32} />
      <Typography fontSize={14} lineHeight={18}>
        ГК «Иннотех» — это современная высокотехнологичная быстроразвивающаяся ИТ-компания. С 2020 года мы
        разрабатываем инновационные решения для цифровизации бизнеса. ГК «Иннотех» выстраивает партнерские
        отношения с ведущими компаниями финансового сектора, предлагая им комплексные решения для фронт- и
        бэк-офисов, современные финтех-продукты, системы работы с большими данными. Кроме того, ГК «Иннотех»
        выполняет на заказ технологические проекты любой сложности, помогая своим клиентам на пути к цифровой
        трансформации.
      </Typography>
      <Spacer height={16} />
      <Typography fontSize={14} lineHeight={18}>
        Подробную информацию о компании можно найти на <a href="https://inno.tech">официальном сайте</a>.
      </Typography>
      <Spacer height={32} />
      <Typography
        fontSize={20}
        lineHeight={24}
        textAlign="center"
        fontWeight={700}
        style={{ display: 'block' }}
      >
        Призы и правила
      </Typography>
      <Spacer height={24} />
      <Typography fontSize={16} lineHeight={19} textAlign="center" display="block">
        Пройди тест, займи первое место и получичи крутой приз от нашей компании.
      </Typography>
      <Spacer height={8} />
      <Flex style={{ margin: '0 auto', maxWidth: '5rem' }}>
        <Flex flexDirection="column">
          <Spacer height={54} />
          <Typography fontSize={14} lineHeight={16} textAlign="left" display="block">
            Помогут сконцентрироваться на работе и отдыхе под любимую музыку
          </Typography>
        </Flex>
        <Flex
          flexShrink={0}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginLeft: '0.1rem' }}
        >
          <StaticImage src={'../images/airpods.png'} alt={'airpods'} height={134} width={129} />
          <Spacer height={6} />
          <Typography fontSize={14} lineHeight={17} fontWeight={300} display="block" color="#1545EC">
            1 место
          </Typography>
          <Spacer height={4} />
          <Typography fontSize={16} lineHeight={19} fontWeight={700} display="block">
            AirPods
          </Typography>
        </Flex>
      </Flex>
      <Flex style={{ margin: '0 auto', maxWidth: '5rem' }}>
        <Flex
          flexShrink={0}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginRight: '0.6rem' }}
        >
          <StaticImage src={'../images/cup.png'} alt={'airpods'} height={173} width={119} />
          <Spacer height={6} />
          <Typography fontSize={14} lineHeight={17} fontWeight={300} display="block" color="#1545EC">
            2 и 3 места
          </Typography>

          <Spacer height={4} />
          <Typography fontSize={16} lineHeight={19} fontWeight={700} display="block">
            Умный термос
          </Typography>
        </Flex>
        <Flex flexDirection="column">
          <Spacer height={54} />
          <Typography fontSize={14} lineHeight={16} textAlign="right" display="block">
            Согреет в холодное время. И, чтобы не обжечься, покажет температуру жидкости внутри
          </Typography>
        </Flex>
      </Flex>
      <Spacer height={32} />
      <Typography fontSize={12} lineHeight={14}>
        Победителем станет тот, кто правильно ответит на вопросы за минимальное время. Первые 5 мест мы
        наградим на подведении итогов конференции. Не пропусти!
      </Typography>
      <Spacer height={40} />
      <AniLink fade to="quiz">
        <Button>Пройти INNOQUIZ</Button>
      </AniLink>
      <Spacer height={21} />
      <TopScores />
      <Spacer height={30} />
      <Typography fontSize={16} lineHeight={19} fontWeight={700} textAlign="center" display="block">
        А если хочешь попасть в нашу крутую команду, то заполняй анкету ниже
      </Typography>
      <Spacer height={40} />
      <AniLink fade to="join">
        <Button>Стать частью команды</Button>
      </AniLink>
      <Spacer height={150} />
    </div>
  )
}

export default IndexPage
