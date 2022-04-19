import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { useName } from '../../hooks/LSHooks'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { FileUploader } from '../../components/FileUploader'
import { Checkbox } from '../../components/Checkbox'
import { DevTool } from '@hookform/devtools'
export type JoinUsForm = {
  name: string
  phone: string
  workArea: string
  level: string
  messenger: string
  cv?: File
  mailing: boolean
}
const JoinUs: React.FC = () => {
  const [name] = useName()
  const { handleSubmit, control } = useForm<JoinUsForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: name ?? '',
      phone: '',
      workArea: '',
      level: '',
      messenger: '',
      mailing: false
    }
  })

  const onSubmit = (values: JoinUsForm) => {
    console.log(values)
  }
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
      <Controller
        control={control}
        rules={{ required: true, minLength: 3 }}
        render={({ field, fieldState }) => {
          return (
            <Input
              {...field}
              error={!!fieldState.error}
              placeholder={'Номер телефона'}
              errorMessage={getErrorMessage(fieldState.error?.type)}
            />
          )
        }}
        name={'phone'}
      />
      <Controller
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Select
              {...field}
              options={[
                { name: 'Аналитик (бизнес/системный)', value: 'Аналитик (бизнес/системный)' },
                { name: 'QA (авто/ручной)', value: 'QA (авто/ручной)' },
                { name: 'Разработчик Java', value: 'Разработчик Java' },
                { name: 'Разработчик Frontend', value: 'Разработчик Frontend' },
                { name: 'DevOps', value: 'DevOps' },
                { name: 'IT рекрутер', value: 'IT рекрутер' },
                { name: 'Иное', value: 'Иное' }
              ]}
              placeholder={'Выбери свою сециализацию'}
            />
          )
        }}
        name={'workArea'}
      />
      <Controller
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Select
              {...field}
              options={[
                { name: 'Начинающий (не работал)', value: 'Начинающий (не работал)' },
                { name: 'Менее года', value: 'Менее года' },
                { name: '1-3 года', value: '1-3 года' },
                { name: 'Более 3 лет', value: 'Более 3 лет' }
              ]}
              placeholder={'Твой уровень'}
            />
          )
        }}
        name={'workArea'}
      />
      <Controller
        control={control}
        rules={{ required: true, minLength: 3 }}
        render={({ field, fieldState }) => {
          return (
            <Input
              {...field}
              error={!!fieldState.error}
              placeholder={'Мессенджер'}
              errorMessage={getErrorMessage(fieldState.error?.type)}
            />
          )
        }}
        name={'messenger'}
      />
      <Controller
        control={control}
        render={({ field }) => {
          return <FileUploader onChange={field.onChange} />
        }}
        name={'cv'}
      />
      <Controller
        control={control}
        render={({ field: { value, ...rest }, fieldState }) => {
          return (
            <Checkbox
              label={'Хочу получать рассылку компании (обещаем не спамить)'}
              {...rest}
              checked={value}
            />
          )
        }}
        name={'mailing'}
      />
      <Button type="submit">submit</Button>
      <DevTool control={control} />
    </form>
  )
}

export default JoinUs
