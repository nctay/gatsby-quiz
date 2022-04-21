import React, { useState } from 'react'
import styled from 'styled-components'
import { Controller, useForm } from 'react-hook-form'
import { Button } from './Button'
import { useName } from '../hooks/LSHooks'
import { Input } from './Input'
import { Select } from './Select'
import { FileUploader } from './FileUploader'
import { Checkbox } from './Checkbox'
import { Typography } from './Typography'
import { Spacer } from './Spacer'
import useAxios from 'axios-hooks'
import { Flex } from './Flex'
import { Hide } from './Hide'
import { StaticImage } from 'gatsby-plugin-image'

export type JoinUsForm = {
  name: string
  phone: string
  specialization: string
  level: string
  messenger: string
  cv?: File
  subscribe: boolean
}
const JoinUsForm = React.forwardRef<HTMLFormElement, { onSubmitUserData: (form: FormData) => void }>(
  ({ onSubmitUserData }, ref) => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [name] = useName()
    const { handleSubmit, control } = useForm<JoinUsForm>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      defaultValues: {
        name: name ?? '',
        phone: '',
        specialization: '',
        level: '',
        messenger: '',
        subscribe: false
      }
    })

    const onSubmit = (values: JoinUsForm) => {
      console.log(values)
      const formData = new FormData()
      if (values.cv) {
        formData.append('cv', values.cv, values.cv.name)
      }
      formData.append('name', values.name)
      formData.append('phone', values.phone)
      formData.append('specialization', values.specialization)
      formData.append('level', values.specialization)
      formData.append('messenger', values.messenger)
      formData.append('subscribe', JSON.stringify(values.subscribe))
      onSubmitUserData(formData)
      setIsSubmitted(true)
    }

    const getErrorMessage = (errorType?: string): string => {
      switch (errorType) {
        case 'required':
          return 'Это поле обязательно'
        case 'minLength':
          return 'Минимум 3 символа'
        case 'isValidEmail':
          return 'Некорректный email'
        case 'isCorrectPhone':
          return 'Некорректный номер'
        default:
          return ''
      }
    }

    return (
      // @ts-ignore
      <FormWrapper ref={ref} onSubmit={handleSubmit(onSubmit)} id="join_form">
        <Hide isHiding={!isSubmitted}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ padding: '0.4rem 0.15rem' }}
          >
            <StaticImage src={'../images/ok.svg'} alt={'ok'} />
            <Spacer height={25} />
            <Typography fontSize={28} lineHeight={30} fontWeight={700} display="block" textAlign="center">
              Спасибо за отклик!
            </Typography>
            <Typography fontSize={28} lineHeight={30} fontWeight={700} display="block" textAlign="center">
              Мы свяжемся с тобой!
            </Typography>
          </Flex>
        </Hide>
        <Hide isHiding={isSubmitted}>
          <Typography
            fontSize={28}
            lineHeight={30}
            fontWeight={700}
            display="block"
            textAlign="center"
            style={{ margin: '0 24px' }}
          >
            Присоединяйся к нашей крутой команде
          </Typography>
          <Spacer height={25} />
          <Controller
            control={control}
            rules={{ required: true, minLength: 3 }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  {...field}
                  required
                  error={!!fieldState.error}
                  placeholder={'ФИО'}
                  errorMessage={getErrorMessage(fieldState.error?.type)}
                />
              )
            }}
            name={'name'}
          />
          <Spacer height={10} shrink={0} />
          <Row>
            <Controller
              control={control}
              rules={{
                required: true,
                validate: {
                  isCorrectPhone: (value) =>
                    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
                      value
                    )
                }
              }}
              render={({ field, fieldState }) => {
                console.log(field.value)
                return (
                  <Input
                    {...field}
                    mask={[
                      '+',
                      '7',
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/
                    ]}
                    required
                    error={!!fieldState.error}
                    placeholder={'Номер телефона'}
                    errorMessage={getErrorMessage(fieldState.error?.type)}
                  />
                )
              }}
              name={'phone'}
            />
            <Spacer height={10} />
            <Controller
              control={control}
              rules={{ minLength: 3 }}
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
          </Row>
          <Spacer height={10} />
          <Row>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => {
                return (
                  <Select
                    {...field}
                    required
                    error={!!fieldState.error}
                    errorMessage={getErrorMessage(fieldState.error?.type)}
                    options={[
                      { name: 'Аналитик (бизнес/системный)', value: 'Аналитик (бизнес/системный)' },
                      { name: 'QA (авто/ручной)', value: 'QA (авто/ручной)' },
                      { name: 'Разработчик Java', value: 'Разработчик Java' },
                      { name: 'Разработчик Frontend', value: 'Разработчик Frontend' },
                      { name: 'DevOps', value: 'DevOps' },
                      { name: 'IT рекрутер', value: 'IT рекрутер' },
                      { name: 'Иное', value: 'Иное' }
                    ]}
                    placeholder={'Твоя специализация'}
                  />
                )
              }}
              name={'specialization'}
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
                    required
                    errorMessage={getErrorMessage(fieldState.error?.type)}
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
              name={'level'}
            />
          </Row>
          <Spacer height={10} />
          <Controller
            control={control}
            render={({ field }) => {
              return <FileUploader onChange={field.onChange} />
            }}
            name={'cv'}
          />
          <Spacer height={10} />
          <Controller
            control={control}
            render={({ field: { value, ...rest }, fieldState }) => {
              return <Checkbox label={'Хочу получать рассылку компании'} {...rest} checked={value} />
            }}
            name={'subscribe'}
          />
          <Spacer height={27} />
          <Button type="submit">Присоединится к команде</Button>
          <Spacer height={30} />
          <Typography fontSize={12} lineHeight={18} color="#999999" display="block" textAlign="center">
            Нажимая кнопку, я соглашаюсь на{' '}
            <a
              target="_blank"
              href={'https://inno.tech/assets/work-with-data.pdf'}
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              обработку персональных данных и получение информационных сообщений
            </a>
          </Typography>
        </Hide>
      </FormWrapper>
    )
  }
)

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    > :first-child {
      margin-right: 10px;
    }
  }
`
export const FormWrapper = styled.form`
  background: white;
  border-radius: 0.3rem;
  padding: 0.4rem 0.15rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    button[type='submit'] {
      width: 100%;
    }
    padding: 0.4rem 0.3rem;
  }
`

export default JoinUsForm
