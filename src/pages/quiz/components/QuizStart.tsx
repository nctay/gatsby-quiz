import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Select } from '../../../components/Select'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { useName } from '../../../hooks/LSHooks'
import { Spacer } from '../../../components/Spacer'
import { Typography } from '../../../components/Typography'
const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email)
  )

type QuizStartForm = {
  name: string
  email: string
  workStatus: string
}

const QuizStart: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [_, setName] = useName()
  const { handleSubmit, control } = useForm<QuizStartForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      workStatus: ''
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
    onStart()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Spacer height={17} />
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
      <Spacer height={17} />
      <Controller
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Select
              {...field}
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
        name={'workStatus'}
      />
      <Spacer height={37} />
      <Typography fontSize={14} lineHeight={19}>
        Тебе нужно будет ответить верно на 30 вопросов за минимальное время Старт квиза запускает таймер
        Переходить между вопросами нельзя Пропус вопроса = неверному ответу
      </Typography>
      <Spacer height={16} />
      <Button type="submit">Начать INNOQUIZ</Button>
      <Spacer height={12} />
      <Typography fontSize={10} lineHeight={12}>
        Нажимая кнопку, я соглашаюсь на обработку персональных данных и получение информационных сообщений
      </Typography>
    </form>
  )
}

export default QuizStart
