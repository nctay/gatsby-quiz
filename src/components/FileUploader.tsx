import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Typography } from './Typography'
import { Flex } from './Flex'

export const FileUploader: React.FC<{ onChange: (file?: File) => void }> = ({ onChange }) => {
  const [file, setFile] = useState<File>()
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: ['application/pdf'],
    multiple: false,
    noDrag: true
  })
  useEffect(() => {
    setFile(acceptedFiles[0])
  }, [acceptedFiles])

  useEffect(() => {
    onChange(file)
  }, [file])

  const onClear = () => {
    setFile(undefined)
  }
  return file ? (
    <Wrapper alignItems="center" justifyContent="space-between">
      <Typography
        lineHeight={18}
        fontSize={16}
        style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
      >
        {file.name}
      </Typography>
      <Flex flexShrink={0} style={{ marginLeft: '10px' }}>
        <StaticImage src={'../images/close.svg'} height={16} width={16} alt={'close'} onClick={onClear} />
      </Flex>
    </Wrapper>
  ) : (
    <Wrapper alignItems="center" {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <StaticImage src={'../images/apply.svg'} alt={''} width={16} height={18} />
      <Typography lineHeight={28} fontSize={16} color={'#888889'} style={{ marginLeft: 10 }}>
        CV
      </Typography>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  cursor: pointer;
  height: 0.48rem;
  width: 100%;
  font-size: 0.16rem;
  line-height: 0.28rem;
  background: #ffffff;
  border: 0.01rem solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 0.1rem;
  padding: 0.15rem 0.2rem;
  outline: none;
  :hover {
    border: 0.01rem solid rgba(0, 0, 0, 0.2);
  }
  :active {
    border: 0.01rem solid rgba(0, 0, 0, 0.3);
  }
`
