import * as React from 'react'
import styled from 'styled-components'
import { Typography } from '../components/Typography'
import { Button } from '../components/Button'
import { Spacer } from '../components/Spacer'
import { Flex } from '../components/Flex'
import { StaticImage } from 'gatsby-plugin-image'
import { TopScores } from '../components/TopScores'

import JoinUsForm from '../components/JoinUsForm'
import { QuizBlock } from '../components/quiz'
import { useCallback, useRef, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'

const IndexPage = () => {
  const [isShowQuiz, setIsShowQuiz] = useState(false)
  const formRef = useRef<any>()
  const isFormOnScreen = useOnScreen(formRef)

  const onCloseQuiz = useCallback(() => {
    setIsShowQuiz(false)
  }, [])
  const onGoToJoinForm = useCallback(() => {
    onCloseQuiz()
    const element = document.getElementById('join_form')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])

  const onGoToScoresForm = useCallback(() => {
    onCloseQuiz()
    const element = document.getElementById('scores')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <>
      <Spacer height={20} />
      <Flex width="100%" justifyContent="center">
        <StaticImage src={'../images/inno.svg'} alt={'inno logo'} />
      </Flex>
      <Spacer height={20} />
      <Flex justifyContent="center" height={550} width="100%">
        <StaticImage src={'../images/promo.png'} alt="promo" height={550} />
      </Flex>
      <Layout>
        <Typography fontSize={38} lineHeight={38} fontWeight={700} display="block" textAlign="center">
          Пройди Innoquiz и получай призы от Иннотех
        </Typography>
        <Spacer height={15} />
        <Typography fontSize={16} lineHeight={22} display="block" textAlign="center" color="#606075">
          Участвуй в активностях на стенде компании, знакомься с нашими экспертами, заполняй анкеты обратной
          связи и получай призы от нас.
        </Typography>
        <Spacer height={30} />
        <QuizButton
          isShown={!isFormOnScreen}
          onClick={() => {
            setIsShowQuiz(true)
          }}
        >
          Пройти INNOQUIZ
        </QuizButton>
        <Spacer height={80} />
        <Typography fontSize={28} lineHeight={30} fontWeight={700} display="block" textAlign="center">
          Призы
        </Typography>
        <Spacer height={35} />
        <Flex>
          <Flex flexDirection="column" alignItems="center" flex="1 1 0">
            <StaticImage
              src={'../images/airpods.png'}
              alt={'airpods'}
              height={157}
              width={95}
              className="airpods"
            />
            <Spacer height={20} />
            <Typography fontSize={10} lineHeight={12} fontWeight={700} display="block" color="#D8AF00">
              1 МЕСТО
            </Typography>
            <Spacer height={10} />
            <Typography fontSize={16} lineHeight={22} fontWeight={700} display="block">
              Airpods
            </Typography>
            <Spacer height={10} />
            <Typography fontSize={13} lineHeight={18} display="block" textAlign="center">
              Помогут сконцентрироваться на работе и отдыхе под любимую музыку
            </Typography>
          </Flex>
          <Flex flexDirection="column" alignItems="center" flex="1 1 0">
            <StaticImage src={'../images/cup.png'} alt={'cup'} height={157} width={108} className="cup" />
            <Spacer height={20} />
            <Typography fontSize={10} lineHeight={12} fontWeight={700} display="block" color="#929292">
              2 И 3 МЕСТА
            </Typography>
            <Spacer height={10} />
            <Typography fontSize={16} lineHeight={22} fontWeight={700} display="block">
              Умный термос
            </Typography>
            <Spacer height={10} />
            <Typography fontSize={13} lineHeight={18} display="block" textAlign="center">
              Согреет в холодное время. И, чтобы не обжечься, покажет температуру жидкости внутри
            </Typography>
          </Flex>
        </Flex>
        <Spacer height={80} />
        <TopScores />
        <Spacer height={80} />
        <Typography fontSize={28} lineHeight={30} fontWeight={700} display="block" textAlign="center">
          О группе компаний «Иннотех»
        </Typography>
        <Spacer height={15} />
        <Typography fontSize={16} lineHeight={24} display="block">
          ГК «Иннотех» — это современная высокотехнологичная быстроразвивающаяся ИТ-компания. С 2020 года мы
          разрабатываем инновационные решения для цифровизации бизнеса.
        </Typography>
        <Spacer height={25} />
        <Typography fontSize={16} lineHeight={24} display="block">
          Подробную информацию о компании можно найти на{' '}
          <a href={'https://inno.tech'} style={{ color: '#113EF5' }}>
            официальном сайте.
          </a>
        </Typography>
        <Spacer height={80} />
        <JoinUsForm ref={formRef} />
        <QuizBlock
          onGoToJoinForm={onGoToJoinForm}
          onGoToScoresForm={onGoToScoresForm}
          shown={isShowQuiz}
          onCloseQuiz={onCloseQuiz}
        />
        <Spacer height={40} />
        <Typography fontSize={16} lineHeight={20} display="block" textAlign="center">
          © Innotech, 2022
        </Typography>
        <Spacer height={28} />
      </Layout>
    </>
  )
}

const QuizButton = styled(Button)<{ isShown: boolean }>`
  position: sticky;
  z-index: 2;
  top: calc(100vh - 80px);
  opacity: ${({ isShown }) => (isShown ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
  pointer-events: ${({ isShown }) => (isShown ? 'all' : 'none')};
  @media (min-width: 800px) {
    position: static;
    opacity: 1;
  }
`
const Layout = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 24px;
  @media (min-width: 800px) {
    max-width: 670px;
    padding: 0;
    .airpods {
      height: 189px;
      width: 115px;
    }
    .cup {
      height: 188px;
      width: 129px;
    }
  }
`

export default IndexPage
