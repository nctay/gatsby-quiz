import React from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { Select } from '../../Select'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { useEmail, useName, useWork } from '../../../hooks/LSHooks'
import { Spacer } from '../../Spacer'
import { Typography } from '../../Typography'
import { Flex } from '../../Flex'
import { StaticImage } from 'gatsby-plugin-image'
const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email)
  )

type QuizStartForm = {
  name: string
  email: string
  work: string
}

const QuizStart: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [_, setName] = useName()
  const [__, setEmail] = useEmail()
  const [___, setWork] = useWork()
  const { handleSubmit, control } = useForm<QuizStartForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      work: ''
    }
  })

  const getErrorMessage = (errorType?: string): string => {
    switch (errorType) {
      case 'required':
        return 'Это поле обязательно'
      case 'minLength':
        return 'Минимум 3 символа'
      case 'isValidEmail':
        return 'Некорректный email'
      default:
        return ''
    }
  }

  const onSubmit = (values: QuizStartForm) => {
    console.log(values)
    setName(values.name)
    setEmail(values.email)
    setWork(values.work)
    onStart()
  }

  return (
    <>
      <Spacer height={20} width="100%" />
      <Typography fontSize={16} lineHeight={22} display="block" textAlign="center">
        Тебе нужно будет ответить верно на 30 вопросов за минимальное время.
      </Typography>
      <Spacer height={25} />
      <Flex>
        <Flex flexDirection="column" alignItems="center" flex="1 1 0">
          <StaticImage src={'../../../images/play.svg'} alt={'play'} />
          <Spacer height={14} />
          <Typography fontSize={13} lineHeight={18} display="block" textAlign="center" color="#606075">
            Старт квиза запускает таймер
          </Typography>
        </Flex>
        <Flex flexDirection="column" alignItems="center" flex="1 1 0">
          <StaticImage src={'../../../images/skip.svg'} alt={'skip'} />
          <Spacer height={14} />
          <Typography fontSize={13} lineHeight={18} display="block" textAlign="center" color="#606075">
            Пропуск вопроса равен неверному ответу
          </Typography>
        </Flex>
      </Flex>
      <Spacer height={40} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{ required: true, minLength: 3 }}
          render={({ field, fieldState }) => {
            return (
              <Input
                {...field}
                error={!!fieldState.error}
                placeholder={'Фамилия и Имя'}
                errorMessage={getErrorMessage(fieldState.error?.type)}
              />
            )
          }}
          name={'name'}
        />
        <Spacer height={10} />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: {
              isValidEmail
            }
          }}
          render={({ field, fieldState }) => {
            return (
              <Input
                {...field}
                placeholder={'Твоя почта'}
                error={!!fieldState.error}
                errorMessage={getErrorMessage(fieldState.error?.type)}
              />
            )
          }}
          name={'email'}
        />
        <Spacer height={10} />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <Select
                {...field}
                error={!!fieldState.error}
                options={[
                  { name: 'Только учусь', value: 'Только учусь' },
                  { name: 'Начинаю карьеру', value: 'Начинаю карьеру' },
                  { name: 'Работаю (IT специалист)', value: 'Работаю (IT специалист)' },
                  { name: 'Работаю (не IT)', value: 'Работаю (не IT)' },
                  { name: 'Ищу новое место работы (IT)', value: 'Ищу новое место работы (IT)' },
                  { name: 'Ищу новое место работы (не IT)', value: 'Ищу новое место работы (не IT)' }
                ]}
                placeholder={'Твой статус'}
              />
            )
          }}
          name={'work'}
        />
        <Spacer height={10} />
        <Button type="submit" style={{ width: '100%' }}>
          Начать INNOQUIZ
        </Button>
        <Spacer height={12} />
        <Typography fontSize={10} lineHeight={12}>
          Нажимая кнопку, я соглашаюсь на обработку персональных данных и получение информационных сообщений
        </Typography>
      </Form>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export default QuizStart
